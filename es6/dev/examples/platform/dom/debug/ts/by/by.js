import { By } from 'angular2/platform/browser';
var debugElement;
class MyDirective {
}
// #docregion by_all
debugElement.query(By.all());
// #enddocregion
// #docregion by_css
debugElement.query(By.css('[attribute]'));
// #enddocregion
// #docregion by_directive
debugElement.query(By.directive(MyDirective));
// #enddocregion
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLXlLRFZzTlZwLnRtcC9hbmd1bGFyMi9leGFtcGxlcy9wbGF0Zm9ybS9kb20vZGVidWcvdHMvYnkvYnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyxFQUFFLEVBQUMsTUFBTSwyQkFBMkI7QUFHNUMsSUFBSSxZQUEwQixDQUFDO0FBQy9CO0FBQW1CLENBQUM7QUFFcEIsb0JBQW9CO0FBQ3BCLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDN0IsZ0JBQWdCO0FBRWhCLG9CQUFvQjtBQUNwQixZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUMxQyxnQkFBZ0I7QUFFaEIsMEJBQTBCO0FBQzFCLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQzlDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Qnl9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtEZWJ1Z0VsZW1lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG52YXIgZGVidWdFbGVtZW50OiBEZWJ1Z0VsZW1lbnQ7XG5jbGFzcyBNeURpcmVjdGl2ZSB7fVxuXG4vLyAjZG9jcmVnaW9uIGJ5X2FsbFxuZGVidWdFbGVtZW50LnF1ZXJ5KEJ5LmFsbCgpKTtcbi8vICNlbmRkb2NyZWdpb25cblxuLy8gI2RvY3JlZ2lvbiBieV9jc3NcbmRlYnVnRWxlbWVudC5xdWVyeShCeS5jc3MoJ1thdHRyaWJ1dGVdJykpO1xuLy8gI2VuZGRvY3JlZ2lvblxuXG4vLyAjZG9jcmVnaW9uIGJ5X2RpcmVjdGl2ZVxuZGVidWdFbGVtZW50LnF1ZXJ5KEJ5LmRpcmVjdGl2ZShNeURpcmVjdGl2ZSkpO1xuLy8gI2VuZGRvY3JlZ2lvblxuIl19