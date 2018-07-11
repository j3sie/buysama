/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as html from './ast';
import { ParseTreeResult } from './parser';
import { NGSP_UNICODE } from './tags';
export const PRESERVE_WS_ATTR_NAME = 'ngPreserveWhitespaces';
const SKIP_WS_TRIM_TAGS = new Set(['pre', 'template', 'textarea', 'script', 'style']);
// Equivalent to \s with \u00a0 (non-breaking space) excluded.
// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
const WS_CHARS = ' \f\n\r\t\v\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff';
const NO_WS_REGEXP = new RegExp(`[^${WS_CHARS}]`);
const WS_REPLACE_REGEXP = new RegExp(`[${WS_CHARS}]{2,}`, 'g');
function hasPreserveWhitespacesAttr(attrs) {
    return attrs.some((attr) => attr.name === PRESERVE_WS_ATTR_NAME);
}
/**
 * Angular Dart introduced &ngsp; as a placeholder for non-removable space, see:
 * https://github.com/dart-lang/angular/blob/0bb611387d29d65b5af7f9d2515ab571fd3fbee4/_tests/test/compiler/preserve_whitespace_test.dart#L25-L32
 * In Angular Dart &ngsp; is converted to the 0xE500 PUA (Private Use Areas) unicode character
 * and later on replaced by a space. We are re-implementing the same idea here.
 */
export function replaceNgsp(value) {
    // lexer is replacing the &ngsp; pseudo-entity with NGSP_UNICODE
    return value.replace(new RegExp(NGSP_UNICODE, 'g'), ' ');
}
/**
 * This visitor can walk HTML parse tree and remove / trim text nodes using the following rules:
 * - consider spaces, tabs and new lines as whitespace characters;
 * - drop text nodes consisting of whitespace characters only;
 * - for all other text nodes replace consecutive whitespace characters with one space;
 * - convert &ngsp; pseudo-entity to a single space;
 *
 * Removal and trimming of whitespaces have positive performance impact (less code to generate
 * while compiling templates, faster view creation). At the same time it can be "destructive"
 * in some cases (whitespaces can influence layout). Because of the potential of breaking layout
 * this visitor is not activated by default in Angular 5 and people need to explicitly opt-in for
 * whitespace removal. The default option for whitespace removal will be revisited in Angular 6
 * and might be changed to "on" by default.
 */
class WhitespaceVisitor {
    visitElement(element, context) {
        if (SKIP_WS_TRIM_TAGS.has(element.name) || hasPreserveWhitespacesAttr(element.attrs)) {
            // don't descent into elements where we need to preserve whitespaces
            // but still visit all attributes to eliminate one used as a market to preserve WS
            return new html.Element(element.name, html.visitAll(this, element.attrs), element.children, element.sourceSpan, element.startSourceSpan, element.endSourceSpan);
        }
        return new html.Element(element.name, element.attrs, html.visitAll(this, element.children), element.sourceSpan, element.startSourceSpan, element.endSourceSpan);
    }
    visitAttribute(attribute, context) {
        return attribute.name !== PRESERVE_WS_ATTR_NAME ? attribute : null;
    }
    visitText(text, context) {
        const isNotBlank = text.value.match(NO_WS_REGEXP);
        if (isNotBlank) {
            return new html.Text(replaceNgsp(text.value).replace(WS_REPLACE_REGEXP, ' '), text.sourceSpan);
        }
        return null;
    }
    visitComment(comment, context) { return comment; }
    visitExpansion(expansion, context) { return expansion; }
    visitExpansionCase(expansionCase, context) { return expansionCase; }
}
export function removeWhitespaces(htmlAstWithErrors) {
    return new ParseTreeResult(html.visitAll(new WhitespaceVisitor(), htmlAstWithErrors.rootNodes), htmlAstWithErrors.errors);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbF93aGl0ZXNwYWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9tbF9wYXJzZXIvaHRtbF93aGl0ZXNwYWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEtBQUssSUFBSSxNQUFNLE9BQU8sQ0FBQztBQUM5QixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFFcEMsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUcsdUJBQXVCLENBQUM7QUFFN0QsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBRXRGLDhEQUE4RDtBQUM5RCxtR0FBbUc7QUFDbkcsTUFBTSxRQUFRLEdBQUcsMEVBQTBFLENBQUM7QUFDNUYsTUFBTSxZQUFZLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ2xELE1BQU0saUJBQWlCLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxRQUFRLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztBQUUvRCxvQ0FBb0MsS0FBdUI7SUFDekQsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFvQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLHFCQUFxQixDQUFDLENBQUM7QUFDbkYsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxzQkFBc0IsS0FBYTtJQUN2QyxnRUFBZ0U7SUFDaEUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzNELENBQUM7QUFFRDs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0g7SUFDRSxZQUFZLENBQUMsT0FBcUIsRUFBRSxPQUFZO1FBQzlDLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksMEJBQTBCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRixvRUFBb0U7WUFDcEUsa0ZBQWtGO1lBQ2xGLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQ25CLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFDdEYsT0FBTyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQ25CLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFDdEYsT0FBTyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGNBQWMsQ0FBQyxTQUF5QixFQUFFLE9BQVk7UUFDcEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUsscUJBQXFCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3JFLENBQUM7SUFFRCxTQUFTLENBQUMsSUFBZSxFQUFFLE9BQVk7UUFDckMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFbEQsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQ2hCLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRixDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxZQUFZLENBQUMsT0FBcUIsRUFBRSxPQUFZLElBQVMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFMUUsY0FBYyxDQUFDLFNBQXlCLEVBQUUsT0FBWSxJQUFTLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBRWxGLGtCQUFrQixDQUFDLGFBQWlDLEVBQUUsT0FBWSxJQUFTLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0NBQ25HO0FBRUQsTUFBTSw0QkFBNEIsaUJBQWtDO0lBQ2xFLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLGlCQUFpQixFQUFFLEVBQUUsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQ25FLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIGh0bWwgZnJvbSAnLi9hc3QnO1xuaW1wb3J0IHtQYXJzZVRyZWVSZXN1bHR9IGZyb20gJy4vcGFyc2VyJztcbmltcG9ydCB7TkdTUF9VTklDT0RFfSBmcm9tICcuL3RhZ3MnO1xuXG5leHBvcnQgY29uc3QgUFJFU0VSVkVfV1NfQVRUUl9OQU1FID0gJ25nUHJlc2VydmVXaGl0ZXNwYWNlcyc7XG5cbmNvbnN0IFNLSVBfV1NfVFJJTV9UQUdTID0gbmV3IFNldChbJ3ByZScsICd0ZW1wbGF0ZScsICd0ZXh0YXJlYScsICdzY3JpcHQnLCAnc3R5bGUnXSk7XG5cbi8vIEVxdWl2YWxlbnQgdG8gXFxzIHdpdGggXFx1MDBhMCAobm9uLWJyZWFraW5nIHNwYWNlKSBleGNsdWRlZC5cbi8vIEJhc2VkIG9uIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1JlZ0V4cFxuY29uc3QgV1NfQ0hBUlMgPSAnIFxcZlxcblxcclxcdFxcdlxcdTE2ODBcXHUxODBlXFx1MjAwMC1cXHUyMDBhXFx1MjAyOFxcdTIwMjlcXHUyMDJmXFx1MjA1ZlxcdTMwMDBcXHVmZWZmJztcbmNvbnN0IE5PX1dTX1JFR0VYUCA9IG5ldyBSZWdFeHAoYFteJHtXU19DSEFSU31dYCk7XG5jb25zdCBXU19SRVBMQUNFX1JFR0VYUCA9IG5ldyBSZWdFeHAoYFske1dTX0NIQVJTfV17Mix9YCwgJ2cnKTtcblxuZnVuY3Rpb24gaGFzUHJlc2VydmVXaGl0ZXNwYWNlc0F0dHIoYXR0cnM6IGh0bWwuQXR0cmlidXRlW10pOiBib29sZWFuIHtcbiAgcmV0dXJuIGF0dHJzLnNvbWUoKGF0dHI6IGh0bWwuQXR0cmlidXRlKSA9PiBhdHRyLm5hbWUgPT09IFBSRVNFUlZFX1dTX0FUVFJfTkFNRSk7XG59XG5cbi8qKlxuICogQW5ndWxhciBEYXJ0IGludHJvZHVjZWQgJm5nc3A7IGFzIGEgcGxhY2Vob2xkZXIgZm9yIG5vbi1yZW1vdmFibGUgc3BhY2UsIHNlZTpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJ0LWxhbmcvYW5ndWxhci9ibG9iLzBiYjYxMTM4N2QyOWQ2NWI1YWY3ZjlkMjUxNWFiNTcxZmQzZmJlZTQvX3Rlc3RzL3Rlc3QvY29tcGlsZXIvcHJlc2VydmVfd2hpdGVzcGFjZV90ZXN0LmRhcnQjTDI1LUwzMlxuICogSW4gQW5ndWxhciBEYXJ0ICZuZ3NwOyBpcyBjb252ZXJ0ZWQgdG8gdGhlIDB4RTUwMCBQVUEgKFByaXZhdGUgVXNlIEFyZWFzKSB1bmljb2RlIGNoYXJhY3RlclxuICogYW5kIGxhdGVyIG9uIHJlcGxhY2VkIGJ5IGEgc3BhY2UuIFdlIGFyZSByZS1pbXBsZW1lbnRpbmcgdGhlIHNhbWUgaWRlYSBoZXJlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZU5nc3AodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIGxleGVyIGlzIHJlcGxhY2luZyB0aGUgJm5nc3A7IHBzZXVkby1lbnRpdHkgd2l0aCBOR1NQX1VOSUNPREVcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChOR1NQX1VOSUNPREUsICdnJyksICcgJyk7XG59XG5cbi8qKlxuICogVGhpcyB2aXNpdG9yIGNhbiB3YWxrIEhUTUwgcGFyc2UgdHJlZSBhbmQgcmVtb3ZlIC8gdHJpbSB0ZXh0IG5vZGVzIHVzaW5nIHRoZSBmb2xsb3dpbmcgcnVsZXM6XG4gKiAtIGNvbnNpZGVyIHNwYWNlcywgdGFicyBhbmQgbmV3IGxpbmVzIGFzIHdoaXRlc3BhY2UgY2hhcmFjdGVycztcbiAqIC0gZHJvcCB0ZXh0IG5vZGVzIGNvbnNpc3Rpbmcgb2Ygd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIG9ubHk7XG4gKiAtIGZvciBhbGwgb3RoZXIgdGV4dCBub2RlcyByZXBsYWNlIGNvbnNlY3V0aXZlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyB3aXRoIG9uZSBzcGFjZTtcbiAqIC0gY29udmVydCAmbmdzcDsgcHNldWRvLWVudGl0eSB0byBhIHNpbmdsZSBzcGFjZTtcbiAqXG4gKiBSZW1vdmFsIGFuZCB0cmltbWluZyBvZiB3aGl0ZXNwYWNlcyBoYXZlIHBvc2l0aXZlIHBlcmZvcm1hbmNlIGltcGFjdCAobGVzcyBjb2RlIHRvIGdlbmVyYXRlXG4gKiB3aGlsZSBjb21waWxpbmcgdGVtcGxhdGVzLCBmYXN0ZXIgdmlldyBjcmVhdGlvbikuIEF0IHRoZSBzYW1lIHRpbWUgaXQgY2FuIGJlIFwiZGVzdHJ1Y3RpdmVcIlxuICogaW4gc29tZSBjYXNlcyAod2hpdGVzcGFjZXMgY2FuIGluZmx1ZW5jZSBsYXlvdXQpLiBCZWNhdXNlIG9mIHRoZSBwb3RlbnRpYWwgb2YgYnJlYWtpbmcgbGF5b3V0XG4gKiB0aGlzIHZpc2l0b3IgaXMgbm90IGFjdGl2YXRlZCBieSBkZWZhdWx0IGluIEFuZ3VsYXIgNSBhbmQgcGVvcGxlIG5lZWQgdG8gZXhwbGljaXRseSBvcHQtaW4gZm9yXG4gKiB3aGl0ZXNwYWNlIHJlbW92YWwuIFRoZSBkZWZhdWx0IG9wdGlvbiBmb3Igd2hpdGVzcGFjZSByZW1vdmFsIHdpbGwgYmUgcmV2aXNpdGVkIGluIEFuZ3VsYXIgNlxuICogYW5kIG1pZ2h0IGJlIGNoYW5nZWQgdG8gXCJvblwiIGJ5IGRlZmF1bHQuXG4gKi9cbmNsYXNzIFdoaXRlc3BhY2VWaXNpdG9yIGltcGxlbWVudHMgaHRtbC5WaXNpdG9yIHtcbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IGh0bWwuRWxlbWVudCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBpZiAoU0tJUF9XU19UUklNX1RBR1MuaGFzKGVsZW1lbnQubmFtZSkgfHwgaGFzUHJlc2VydmVXaGl0ZXNwYWNlc0F0dHIoZWxlbWVudC5hdHRycykpIHtcbiAgICAgIC8vIGRvbid0IGRlc2NlbnQgaW50byBlbGVtZW50cyB3aGVyZSB3ZSBuZWVkIHRvIHByZXNlcnZlIHdoaXRlc3BhY2VzXG4gICAgICAvLyBidXQgc3RpbGwgdmlzaXQgYWxsIGF0dHJpYnV0ZXMgdG8gZWxpbWluYXRlIG9uZSB1c2VkIGFzIGEgbWFya2V0IHRvIHByZXNlcnZlIFdTXG4gICAgICByZXR1cm4gbmV3IGh0bWwuRWxlbWVudChcbiAgICAgICAgICBlbGVtZW50Lm5hbWUsIGh0bWwudmlzaXRBbGwodGhpcywgZWxlbWVudC5hdHRycyksIGVsZW1lbnQuY2hpbGRyZW4sIGVsZW1lbnQuc291cmNlU3BhbixcbiAgICAgICAgICBlbGVtZW50LnN0YXJ0U291cmNlU3BhbiwgZWxlbWVudC5lbmRTb3VyY2VTcGFuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IGh0bWwuRWxlbWVudChcbiAgICAgICAgZWxlbWVudC5uYW1lLCBlbGVtZW50LmF0dHJzLCBodG1sLnZpc2l0QWxsKHRoaXMsIGVsZW1lbnQuY2hpbGRyZW4pLCBlbGVtZW50LnNvdXJjZVNwYW4sXG4gICAgICAgIGVsZW1lbnQuc3RhcnRTb3VyY2VTcGFuLCBlbGVtZW50LmVuZFNvdXJjZVNwYW4pO1xuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBodG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gYXR0cmlidXRlLm5hbWUgIT09IFBSRVNFUlZFX1dTX0FUVFJfTkFNRSA/IGF0dHJpYnV0ZSA6IG51bGw7XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogaHRtbC5UZXh0LCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IGlzTm90QmxhbmsgPSB0ZXh0LnZhbHVlLm1hdGNoKE5PX1dTX1JFR0VYUCk7XG5cbiAgICBpZiAoaXNOb3RCbGFuaykge1xuICAgICAgcmV0dXJuIG5ldyBodG1sLlRleHQoXG4gICAgICAgICAgcmVwbGFjZU5nc3AodGV4dC52YWx1ZSkucmVwbGFjZShXU19SRVBMQUNFX1JFR0VYUCwgJyAnKSwgdGV4dC5zb3VyY2VTcGFuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBodG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7IHJldHVybiBjb21tZW50OyB9XG5cbiAgdmlzaXRFeHBhbnNpb24oZXhwYW5zaW9uOiBodG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogYW55IHsgcmV0dXJuIGV4cGFuc2lvbjsgfVxuXG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShleHBhbnNpb25DYXNlOiBodG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7IHJldHVybiBleHBhbnNpb25DYXNlOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVXaGl0ZXNwYWNlcyhodG1sQXN0V2l0aEVycm9yczogUGFyc2VUcmVlUmVzdWx0KTogUGFyc2VUcmVlUmVzdWx0IHtcbiAgcmV0dXJuIG5ldyBQYXJzZVRyZWVSZXN1bHQoXG4gICAgICBodG1sLnZpc2l0QWxsKG5ldyBXaGl0ZXNwYWNlVmlzaXRvcigpLCBodG1sQXN0V2l0aEVycm9ycy5yb290Tm9kZXMpLFxuICAgICAgaHRtbEFzdFdpdGhFcnJvcnMuZXJyb3JzKTtcbn1cbiJdfQ==