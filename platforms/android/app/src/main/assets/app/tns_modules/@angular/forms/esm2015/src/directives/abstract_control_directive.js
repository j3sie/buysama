/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Base class for control directives.
 *
 * Only used internally in the forms module.
 *
 *
 * @abstract
 */
export class AbstractControlDirective {
    /**
     * The value of the control.
     * @return {?}
     */
    get value() { return this.control ? this.control.value : null; }
    /**
     * A control is `valid` when its `status === VALID`.
     *
     * In order to have this status, the control must have passed all its
     * validation checks.
     * @return {?}
     */
    get valid() { return this.control ? this.control.valid : null; }
    /**
     * A control is `invalid` when its `status === INVALID`.
     *
     * In order to have this status, the control must have failed
     * at least one of its validation checks.
     * @return {?}
     */
    get invalid() { return this.control ? this.control.invalid : null; }
    /**
     * A control is `pending` when its `status === PENDING`.
     *
     * In order to have this status, the control must be in the
     * middle of conducting a validation check.
     * @return {?}
     */
    get pending() { return this.control ? this.control.pending : null; }
    /**
     * A control is `disabled` when its `status === DISABLED`.
     *
     * Disabled controls are exempt from validation checks and
     * are not included in the aggregate value of their ancestor
     * controls.
     * @return {?}
     */
    get disabled() { return this.control ? this.control.disabled : null; }
    /**
     * A control is `enabled` as long as its `status !== DISABLED`.
     *
     * In other words, it has a status of `VALID`, `INVALID`, or
     * `PENDING`.
     * @return {?}
     */
    get enabled() { return this.control ? this.control.enabled : null; }
    /**
     * Returns any errors generated by failing validation. If there
     * are no errors, it will return null.
     * @return {?}
     */
    get errors() { return this.control ? this.control.errors : null; }
    /**
     * A control is `pristine` if the user has not yet changed
     * the value in the UI.
     *
     * Note that programmatic changes to a control's value will
     * *not* mark it dirty.
     * @return {?}
     */
    get pristine() { return this.control ? this.control.pristine : null; }
    /**
     * A control is `dirty` if the user has changed the value
     * in the UI.
     *
     * Note that programmatic changes to a control's value will
     * *not* mark it dirty.
     * @return {?}
     */
    get dirty() { return this.control ? this.control.dirty : null; }
    /**
     * A control is marked `touched` once the user has triggered
     * a `blur` event on it.
     * @return {?}
     */
    get touched() { return this.control ? this.control.touched : null; }
    /**
     * @return {?}
     */
    get status() { return this.control ? this.control.status : null; }
    /**
     * A control is `untouched` if the user has not yet triggered
     * a `blur` event on it.
     * @return {?}
     */
    get untouched() { return this.control ? this.control.untouched : null; }
    /**
     * Emits an event every time the validation status of the control
     * is re-calculated.
     * @return {?}
     */
    get statusChanges() {
        return this.control ? this.control.statusChanges : null;
    }
    /**
     * Emits an event every time the value of the control changes, in
     * the UI or programmatically.
     * @return {?}
     */
    get valueChanges() {
        return this.control ? this.control.valueChanges : null;
    }
    /**
     * Returns an array that represents the path from the top-level form
     * to this control. Each index is the string name of the control on
     * that level.
     * @return {?}
     */
    get path() { return null; }
    /**
     * Resets the form control. This means by default:
     *
     * * it is marked as `pristine`
     * * it is marked as `untouched`
     * * value is set to null
     *
     * For more information, see `AbstractControl`.
     * @param {?=} value
     * @return {?}
     */
    reset(value = undefined) {
        if (this.control)
            this.control.reset(value);
    }
    /**
     * Returns true if the control with the given path has the error specified. Otherwise
     * returns false.
     *
     * If no path is given, it checks for the error on the present control.
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    hasError(errorCode, path) {
        return this.control ? this.control.hasError(errorCode, path) : false;
    }
    /**
     * Returns error data if the control with the given path has the error specified. Otherwise
     * returns null or undefined.
     *
     * If no path is given, it checks for the error on the present control.
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    getError(errorCode, path) {
        return this.control ? this.control.getError(errorCode, path) : null;
    }
}
function AbstractControlDirective_tsickle_Closure_declarations() {
    /**
     * The `FormControl`, `FormGroup`, or `FormArray`
     * that backs this directive. Most properties fall through to that
     * instance.
     * @abstract
     * @return {?}
     */
    AbstractControlDirective.prototype.control = function () { };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3RfY29udHJvbF9kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9hYnN0cmFjdF9jb250cm9sX2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBLE1BQU07Ozs7O0lBU0osSUFBSSxLQUFLLEtBQVUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTs7Ozs7Ozs7SUFRckUsSUFBSSxLQUFLLEtBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7Ozs7Ozs7O0lBUTlFLElBQUksT0FBTyxLQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFOzs7Ozs7OztJQVFsRixJQUFJLE9BQU8sS0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTs7Ozs7Ozs7O0lBU2xGLElBQUksUUFBUSxLQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFOzs7Ozs7OztJQVFwRixJQUFJLE9BQU8sS0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTs7Ozs7O0lBTWxGLElBQUksTUFBTSxLQUE0QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFOzs7Ozs7Ozs7SUFTekYsSUFBSSxRQUFRLEtBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7Ozs7Ozs7OztJQVNwRixJQUFJLEtBQUssS0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTs7Ozs7O0lBTTlFLElBQUksT0FBTyxLQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFOzs7O0lBRWxGLElBQUksTUFBTSxLQUFrQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFOzs7Ozs7SUFNL0UsSUFBSSxTQUFTLEtBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7Ozs7OztJQU10RixJQUFJLGFBQWE7UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUN6RDs7Ozs7O0lBTUQsSUFBSSxZQUFZO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDeEQ7Ozs7Ozs7SUFPRCxJQUFJLElBQUksS0FBb0IsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7SUFXMUMsS0FBSyxDQUFDLFFBQWEsU0FBUztRQUMxQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDN0M7Ozs7Ozs7Ozs7SUFRRCxRQUFRLENBQUMsU0FBaUIsRUFBRSxJQUFlO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztLQUN0RTs7Ozs7Ozs7OztJQVFELFFBQVEsQ0FBQyxTQUFpQixFQUFFLElBQWU7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0tBQ3JFO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbH0gZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IHtWYWxpZGF0aW9uRXJyb3JzfSBmcm9tICcuL3ZhbGlkYXRvcnMnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGNvbnRyb2wgZGlyZWN0aXZlcy5cbiAqXG4gKiBPbmx5IHVzZWQgaW50ZXJuYWxseSBpbiB0aGUgZm9ybXMgbW9kdWxlLlxuICpcbiAqXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUge1xuICAvKipcbiAgICogVGhlIGBGb3JtQ29udHJvbGAsIGBGb3JtR3JvdXBgLCBvciBgRm9ybUFycmF5YFxuICAgKiB0aGF0IGJhY2tzIHRoaXMgZGlyZWN0aXZlLiBNb3N0IHByb3BlcnRpZXMgZmFsbCB0aHJvdWdoIHRvIHRoYXRcbiAgICogaW5zdGFuY2UuXG4gICAqL1xuICBhYnN0cmFjdCBnZXQgY29udHJvbCgpOiBBYnN0cmFjdENvbnRyb2x8bnVsbDtcblxuICAvKiogVGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLiAqL1xuICBnZXQgdmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC52YWx1ZSA6IG51bGw7IH1cblxuICAvKipcbiAgICogQSBjb250cm9sIGlzIGB2YWxpZGAgd2hlbiBpdHMgYHN0YXR1cyA9PT0gVkFMSURgLlxuICAgKlxuICAgKiBJbiBvcmRlciB0byBoYXZlIHRoaXMgc3RhdHVzLCB0aGUgY29udHJvbCBtdXN0IGhhdmUgcGFzc2VkIGFsbCBpdHNcbiAgICogdmFsaWRhdGlvbiBjaGVja3MuXG4gICAqL1xuICBnZXQgdmFsaWQoKTogYm9vbGVhbnxudWxsIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC52YWxpZCA6IG51bGw7IH1cblxuICAvKipcbiAgICogQSBjb250cm9sIGlzIGBpbnZhbGlkYCB3aGVuIGl0cyBgc3RhdHVzID09PSBJTlZBTElEYC5cbiAgICpcbiAgICogSW4gb3JkZXIgdG8gaGF2ZSB0aGlzIHN0YXR1cywgdGhlIGNvbnRyb2wgbXVzdCBoYXZlIGZhaWxlZFxuICAgKiBhdCBsZWFzdCBvbmUgb2YgaXRzIHZhbGlkYXRpb24gY2hlY2tzLlxuICAgKi9cbiAgZ2V0IGludmFsaWQoKTogYm9vbGVhbnxudWxsIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5pbnZhbGlkIDogbnVsbDsgfVxuXG4gIC8qKlxuICAgKiBBIGNvbnRyb2wgaXMgYHBlbmRpbmdgIHdoZW4gaXRzIGBzdGF0dXMgPT09IFBFTkRJTkdgLlxuICAgKlxuICAgKiBJbiBvcmRlciB0byBoYXZlIHRoaXMgc3RhdHVzLCB0aGUgY29udHJvbCBtdXN0IGJlIGluIHRoZVxuICAgKiBtaWRkbGUgb2YgY29uZHVjdGluZyBhIHZhbGlkYXRpb24gY2hlY2suXG4gICAqL1xuICBnZXQgcGVuZGluZygpOiBib29sZWFufG51bGwgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnBlbmRpbmcgOiBudWxsOyB9XG5cbiAgLyoqXG4gICAqIEEgY29udHJvbCBpcyBgZGlzYWJsZWRgIHdoZW4gaXRzIGBzdGF0dXMgPT09IERJU0FCTEVEYC5cbiAgICpcbiAgICogRGlzYWJsZWQgY29udHJvbHMgYXJlIGV4ZW1wdCBmcm9tIHZhbGlkYXRpb24gY2hlY2tzIGFuZFxuICAgKiBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSBhZ2dyZWdhdGUgdmFsdWUgb2YgdGhlaXIgYW5jZXN0b3JcbiAgICogY29udHJvbHMuXG4gICAqL1xuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbnxudWxsIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5kaXNhYmxlZCA6IG51bGw7IH1cblxuICAvKipcbiAgICogQSBjb250cm9sIGlzIGBlbmFibGVkYCBhcyBsb25nIGFzIGl0cyBgc3RhdHVzICE9PSBESVNBQkxFRGAuXG4gICAqXG4gICAqIEluIG90aGVyIHdvcmRzLCBpdCBoYXMgYSBzdGF0dXMgb2YgYFZBTElEYCwgYElOVkFMSURgLCBvclxuICAgKiBgUEVORElOR2AuXG4gICAqL1xuICBnZXQgZW5hYmxlZCgpOiBib29sZWFufG51bGwgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLmVuYWJsZWQgOiBudWxsOyB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW55IGVycm9ycyBnZW5lcmF0ZWQgYnkgZmFpbGluZyB2YWxpZGF0aW9uLiBJZiB0aGVyZVxuICAgKiBhcmUgbm8gZXJyb3JzLCBpdCB3aWxsIHJldHVybiBudWxsLlxuICAgKi9cbiAgZ2V0IGVycm9ycygpOiBWYWxpZGF0aW9uRXJyb3JzfG51bGwgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLmVycm9ycyA6IG51bGw7IH1cblxuICAvKipcbiAgICogQSBjb250cm9sIGlzIGBwcmlzdGluZWAgaWYgdGhlIHVzZXIgaGFzIG5vdCB5ZXQgY2hhbmdlZFxuICAgKiB0aGUgdmFsdWUgaW4gdGhlIFVJLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgcHJvZ3JhbW1hdGljIGNoYW5nZXMgdG8gYSBjb250cm9sJ3MgdmFsdWUgd2lsbFxuICAgKiAqbm90KiBtYXJrIGl0IGRpcnR5LlxuICAgKi9cbiAgZ2V0IHByaXN0aW5lKCk6IGJvb2xlYW58bnVsbCB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wucHJpc3RpbmUgOiBudWxsOyB9XG5cbiAgLyoqXG4gICAqIEEgY29udHJvbCBpcyBgZGlydHlgIGlmIHRoZSB1c2VyIGhhcyBjaGFuZ2VkIHRoZSB2YWx1ZVxuICAgKiBpbiB0aGUgVUkuXG4gICAqXG4gICAqIE5vdGUgdGhhdCBwcm9ncmFtbWF0aWMgY2hhbmdlcyB0byBhIGNvbnRyb2wncyB2YWx1ZSB3aWxsXG4gICAqICpub3QqIG1hcmsgaXQgZGlydHkuXG4gICAqL1xuICBnZXQgZGlydHkoKTogYm9vbGVhbnxudWxsIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5kaXJ0eSA6IG51bGw7IH1cblxuICAvKipcbiAgICogQSBjb250cm9sIGlzIG1hcmtlZCBgdG91Y2hlZGAgb25jZSB0aGUgdXNlciBoYXMgdHJpZ2dlcmVkXG4gICAqIGEgYGJsdXJgIGV2ZW50IG9uIGl0LlxuICAgKi9cbiAgZ2V0IHRvdWNoZWQoKTogYm9vbGVhbnxudWxsIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC50b3VjaGVkIDogbnVsbDsgfVxuXG4gIGdldCBzdGF0dXMoKTogc3RyaW5nfG51bGwgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnN0YXR1cyA6IG51bGw7IH1cblxuICAvKipcbiAgICogQSBjb250cm9sIGlzIGB1bnRvdWNoZWRgIGlmIHRoZSB1c2VyIGhhcyBub3QgeWV0IHRyaWdnZXJlZFxuICAgKiBhIGBibHVyYCBldmVudCBvbiBpdC5cbiAgICovXG4gIGdldCB1bnRvdWNoZWQoKTogYm9vbGVhbnxudWxsIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC51bnRvdWNoZWQgOiBudWxsOyB9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IGV2ZXJ5IHRpbWUgdGhlIHZhbGlkYXRpb24gc3RhdHVzIG9mIHRoZSBjb250cm9sXG4gICAqIGlzIHJlLWNhbGN1bGF0ZWQuXG4gICAqL1xuICBnZXQgc3RhdHVzQ2hhbmdlcygpOiBPYnNlcnZhYmxlPGFueT58bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5zdGF0dXNDaGFuZ2VzIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCBldmVyeSB0aW1lIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCBjaGFuZ2VzLCBpblxuICAgKiB0aGUgVUkgb3IgcHJvZ3JhbW1hdGljYWxseS5cbiAgICovXG4gIGdldCB2YWx1ZUNoYW5nZXMoKTogT2JzZXJ2YWJsZTxhbnk+fG51bGwge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wudmFsdWVDaGFuZ2VzIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IHRoYXQgcmVwcmVzZW50cyB0aGUgcGF0aCBmcm9tIHRoZSB0b3AtbGV2ZWwgZm9ybVxuICAgKiB0byB0aGlzIGNvbnRyb2wuIEVhY2ggaW5kZXggaXMgdGhlIHN0cmluZyBuYW1lIG9mIHRoZSBjb250cm9sIG9uXG4gICAqIHRoYXQgbGV2ZWwuXG4gICAqL1xuICBnZXQgcGF0aCgpOiBzdHJpbmdbXXxudWxsIHsgcmV0dXJuIG51bGw7IH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBmb3JtIGNvbnRyb2wuIFRoaXMgbWVhbnMgYnkgZGVmYXVsdDpcbiAgICpcbiAgICogKiBpdCBpcyBtYXJrZWQgYXMgYHByaXN0aW5lYFxuICAgKiAqIGl0IGlzIG1hcmtlZCBhcyBgdW50b3VjaGVkYFxuICAgKiAqIHZhbHVlIGlzIHNldCB0byBudWxsXG4gICAqXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgYEFic3RyYWN0Q29udHJvbGAuXG4gICAqL1xuICByZXNldCh2YWx1ZTogYW55ID0gdW5kZWZpbmVkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udHJvbCkgdGhpcy5jb250cm9sLnJlc2V0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbnRyb2wgd2l0aCB0aGUgZ2l2ZW4gcGF0aCBoYXMgdGhlIGVycm9yIHNwZWNpZmllZC4gT3RoZXJ3aXNlXG4gICAqIHJldHVybnMgZmFsc2UuXG4gICAqXG4gICAqIElmIG5vIHBhdGggaXMgZ2l2ZW4sIGl0IGNoZWNrcyBmb3IgdGhlIGVycm9yIG9uIHRoZSBwcmVzZW50IGNvbnRyb2wuXG4gICAqL1xuICBoYXNFcnJvcihlcnJvckNvZGU6IHN0cmluZywgcGF0aD86IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5oYXNFcnJvcihlcnJvckNvZGUsIHBhdGgpIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBlcnJvciBkYXRhIGlmIHRoZSBjb250cm9sIHdpdGggdGhlIGdpdmVuIHBhdGggaGFzIHRoZSBlcnJvciBzcGVjaWZpZWQuIE90aGVyd2lzZVxuICAgKiByZXR1cm5zIG51bGwgb3IgdW5kZWZpbmVkLlxuICAgKlxuICAgKiBJZiBubyBwYXRoIGlzIGdpdmVuLCBpdCBjaGVja3MgZm9yIHRoZSBlcnJvciBvbiB0aGUgcHJlc2VudCBjb250cm9sLlxuICAgKi9cbiAgZ2V0RXJyb3IoZXJyb3JDb2RlOiBzdHJpbmcsIHBhdGg/OiBzdHJpbmdbXSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5nZXRFcnJvcihlcnJvckNvZGUsIHBhdGgpIDogbnVsbDtcbiAgfVxufVxuIl19