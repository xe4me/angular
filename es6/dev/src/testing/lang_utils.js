export function getTypeOf(instance) {
    return instance.constructor;
}
export function instantiateType(type, params = []) {
    var instance = Object.create(type.prototype);
    instance.constructor.apply(instance, params);
    return instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ191dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgteUtEVnNOVnAudG1wL2FuZ3VsYXIyL3NyYy90ZXN0aW5nL2xhbmdfdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEJBQTBCLFFBQVE7SUFDaEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7QUFDOUIsQ0FBQztBQUVELGdDQUFnQyxJQUFjLEVBQUUsTUFBTSxHQUFVLEVBQUU7SUFDaEUsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0MsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlT2YoaW5zdGFuY2UpIHtcbiAgcmV0dXJuIGluc3RhbmNlLmNvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGVUeXBlKHR5cGU6IEZ1bmN0aW9uLCBwYXJhbXM6IGFueVtdID0gW10pIHtcbiAgdmFyIGluc3RhbmNlID0gT2JqZWN0LmNyZWF0ZSh0eXBlLnByb3RvdHlwZSk7XG4gIGluc3RhbmNlLmNvbnN0cnVjdG9yLmFwcGx5KGluc3RhbmNlLCBwYXJhbXMpO1xuICByZXR1cm4gaW5zdGFuY2U7XG59XG4iXX0=