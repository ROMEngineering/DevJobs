/**
 * Utility that accepts a collection, key and vale -> returns the matching deeply nested object
 * @param {*} collection
 * @param {*} key
 * @param {*} value
 */

export function findDeepNestedValue(collection, key, value) {
    for (const node of collection) {
        for (const [k, v] of Object.entries(node)) {
            if (k === key && v === value) {
                return node;
            }
            if (Array.isArray(v)) {
                const _node = findDeepNestedValue(v, key, value);
                if (_node) {
                    return _node;
                }
            }
        }
    }
}
