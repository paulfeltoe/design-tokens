import tokens from '../../design-tokens.json';

/**
 * Walk a dot-separated path into the tokens object.
 * e.g. getNode("color.primary.500") => { $type: "color", $value: "#3b82f6" }
 *
 * @param {string} path - Dot-separated path like "spacing.4" or "color.gray.900"
 * @returns {*} The node at that path, or undefined
 */
function getNode(path) {
  const parts = path.split('.');
  let node = tokens;
  for (const part of parts) {
    if (node === undefined || node === null) return undefined;
    node = node[part];
  }
  return node;
}

/**
 * Resolve DTCG reference syntax like "{color.gray.900}" to its actual value.
 * Recurses to handle chained references.
 *
 * @param {*} value - A token value that may be a reference string
 * @returns {*} The resolved value
 */
function resolveRef(value) {
  if (typeof value !== 'string' || !value.startsWith('{')) return value;
  const path = value.slice(1, -1); // strip { and }
  const node = getNode(path);
  if (!node || node.$value === undefined) return value;
  return resolveRef(node.$value);
}

/**
 * Look up a token by category and key, returning its resolved $value.
 *
 * @param {string} category - Token category path, e.g. "spacing", "font.size", "border.radius"
 * @param {string} key - Token key within the category, e.g. "4", "base", "lg"
 * @returns {*} The resolved value, or undefined if not found
 *
 * @example
 * resolveToken("spacing", "4")        // "16px"
 * resolveToken("font.size", "base")   // "16px"
 * resolveToken("border.radius", "md") // "12px"
 * resolveToken("font.weight", "bold") // 700
 */
export function resolveToken(category, key) {
  if (key === undefined || key === null) return undefined;
  const node = getNode(`${category}.${String(key)}`);
  if (!node || node.$value === undefined) return undefined;
  return resolveRef(node.$value);
}

/**
 * Resolve a color value. Tries multiple token paths in order:
 * 1. Direct dot-path under "color" (e.g. "primary.500" → color.primary.500)
 * 2. Semantic color path (e.g. "text.primary" → semantic.color.text.primary)
 * 3. Base color name (e.g. "white" → color.base.white)
 * 4. Falls back to the raw string (allows "red", "#ff0000", "inherit", etc.)
 *
 * @param {string} value - Color token path or raw CSS color
 * @returns {string} Resolved CSS color value
 *
 * @example
 * resolveColor("primary.600") // "#2563eb"
 * resolveColor("text.primary") // "#171717" (from semantic.color.text.primary)
 * resolveColor("white")        // "#ffffff"
 * resolveColor("#custom")      // "#custom" (passthrough)
 */
export function resolveColor(value) {
  if (!value) return undefined;

  // 1. Try as a path under color.* (e.g. "primary.500", "gray.900")
  const fromColor = getNode(`color.${value}`);
  if (fromColor && fromColor.$value !== undefined) return resolveRef(fromColor.$value);

  // 2. Try as a semantic path (e.g. "text.primary", "background.secondary")
  const fromSemantic = getNode(`semantic.color.${value}`);
  if (fromSemantic && fromSemantic.$value !== undefined) return resolveRef(fromSemantic.$value);

  // 3. Try as a base color name (e.g. "white", "black")
  const fromBase = getNode(`color.base.${value}`);
  if (fromBase && fromBase.$value !== undefined) return resolveRef(fromBase.$value);

  // 4. Passthrough — raw CSS value
  return value;
}

/**
 * Resolve a shadow token key to a CSS box-shadow string.
 *
 * @param {string} key - Shadow token key, e.g. "sm", "base", "lg", "inner"
 * @returns {string} CSS box-shadow value
 *
 * @example
 * resolveShadow("md") // "0px 4px 6px -1px rgba(0, 0, 0, 0.1)"
 * resolveShadow("inner") // "inset 0px 2px 4px 0px rgba(0, 0, 0, 0.06)"
 */
export function resolveShadow(key) {
  if (!key || key === 'none') return 'none';
  const node = getNode(`shadow.${key}`);
  if (!node || !node.$value) return 'none';
  const s = node.$value;
  const inset = s.inset ? 'inset ' : '';
  return `${inset}${s.offsetX} ${s.offsetY} ${s.blur} ${s.spread} ${s.color}`;
}

/**
 * Resolve a font family token key to a CSS font-family string.
 * Handles arrays and properly quotes font names containing spaces.
 *
 * @param {string} key - Font family key: "sans", "serif", or "mono"
 * @returns {string|undefined} CSS font-family value
 *
 * @example
 * resolveFontFamily("sans") // "Inter, -apple-system, BlinkMacSystemFont, ..."
 * resolveFontFamily("mono") // "'Fira Code', Consolas, Monaco, ..."
 */
export function resolveFontFamily(key) {
  const node = getNode(`font.family.${key}`);
  if (!node || !node.$value) return undefined;
  return node.$value.map(f => (f.includes(' ') ? `"${f}"` : f)).join(', ');
}

/**
 * Resolve spacing props with correct specificity:
 * individual (paddingTop) > axis (paddingY) > shorthand (padding)
 *
 * @param {object} props - Spacing prop values (all are spacing token keys)
 * @returns {object} Resolved inline style object
 *
 * @example
 * resolveSpacingProps({ padding: "4" })
 * // { paddingTop: "16px", paddingRight: "16px", paddingBottom: "16px", paddingLeft: "16px" }
 *
 * resolveSpacingProps({ padding: "4", paddingX: "6" })
 * // { paddingTop: "16px", paddingRight: "24px", paddingBottom: "16px", paddingLeft: "24px" }
 */
export function resolveSpacingProps({
  padding, paddingX, paddingY, paddingTop, paddingRight, paddingBottom, paddingLeft,
  margin, marginX, marginY, marginTop, marginRight, marginBottom, marginLeft,
} = {}) {
  const resolve = (individual, axis, shorthand) => {
    const key = individual ?? axis ?? shorthand;
    if (key === undefined) return undefined;
    return resolveToken('spacing', String(key));
  };

  const result = {};

  const pt = resolve(paddingTop, paddingY, padding);
  const pr = resolve(paddingRight, paddingX, padding);
  const pb = resolve(paddingBottom, paddingY, padding);
  const pl = resolve(paddingLeft, paddingX, padding);
  if (pt !== undefined) result.paddingTop = pt;
  if (pr !== undefined) result.paddingRight = pr;
  if (pb !== undefined) result.paddingBottom = pb;
  if (pl !== undefined) result.paddingLeft = pl;

  const mt = resolve(marginTop, marginY, margin);
  const mr = resolve(marginRight, marginX, margin);
  const mb = resolve(marginBottom, marginY, margin);
  const ml = resolve(marginLeft, marginX, margin);
  if (mt !== undefined) result.marginTop = mt;
  if (mr !== undefined) result.marginRight = mr;
  if (mb !== undefined) result.marginBottom = mb;
  if (ml !== undefined) result.marginLeft = ml;

  return result;
}

/**
 * Resolve a composite typography variant token to a flat style object.
 * Variant paths map to the typography section of design-tokens.json.
 *
 * @param {string} variantPath - e.g. "heading.h1", "body.base", "code.inline"
 * @returns {object} Style object with fontFamily, fontSize, fontWeight, lineHeight, letterSpacing
 *
 * @example
 * resolveTypographyVariant("heading.h1")
 * // { fontFamily: "Inter, ...", fontSize: "48px", fontWeight: 700, lineHeight: 1.25, letterSpacing: "-0.025em" }
 */
export function resolveTypographyVariant(variantPath) {
  if (!variantPath) return {};
  const node = getNode(`typography.${variantPath}`);
  if (!node || !node.$value) return {};
  const v = node.$value;

  // fontFamily is a reference like "{font.family.sans}" pointing to an array
  const familyRef = v.fontFamily;
  const familyPath = typeof familyRef === 'string' && familyRef.startsWith('{')
    ? familyRef.slice(1, -1)
    : null;
  const familyKey = familyPath ? familyPath.split('.').pop() : null;

  return {
    fontFamily: familyKey ? resolveFontFamily(familyKey) : undefined,
    fontSize: resolveRef(v.fontSize),
    fontWeight: resolveRef(v.fontWeight),
    lineHeight: resolveRef(v.lineHeight),
    letterSpacing: resolveRef(v.letterSpacing),
  };
}
