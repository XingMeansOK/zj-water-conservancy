/**
 *
 * vue源码 src\core\observer\index.js defineReactive
 *
 * vue.$watch:
 * a:被观察的对象实例
 * observe( a ) -->  创建a的observer对象 --> a的每个成员属性都执行一次 defineReactive（如果属性成员b是对象，就再执行一次observe(b)）
 * a的成员属性，在执行了defineReactive之后，就都获得了新的setget函数。
 * 在a的observer对象中，还有一个Dep类型的实例，维护了依赖a的所有观察者。
 * 在a的属性变化的时候，也就是调用了a成员属性的新的get函数，新的get函数会执行dep.notify，提醒观察者们数据变动
 *
 * 参考这个方式，实现，openlayers图层随制图参数改变而自动更新
 */

function TestMap() {

  this.param1 = '1';
  this.param2 = 'aa';
  // this.param3 = [ 1, 2, 3 ];
  this.param4 = {
    a: '123',
    b: '456'
  };

}



export {
  TestMap
}
