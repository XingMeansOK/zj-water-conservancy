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

function PolylineParam(type) {

  PublicProp.call( this, 'LinePanel', 'LineLayer' );

  /**
   *
   * @type {ol.Color|ol.ColorLike}
   */
  this.color = 'rgba(255, 169, 0, 1)';

  /**
   *
   * @type {string|undefined}
   */
  this.lineCap = null;

  /**
   *
   * @type {Array.<number>}
   */
  this.lineDash = null;

  /**
   *
   * @type {number|undefined}
   */
  this.lineDashOffset = null;

  /**
   *
   * @type {string|undefined}
   */
  this.lineJoin = null;

  /**
   *
   * @type {number|undefined}
   */
  this.miterLimit = null;

  /**
   *
   * @type {number|undefined}
   */
  this.width = 0.4;

  /**
   *
   * @type {string|undefined}
   */
  this.checksum = undefined;

  /**
   * 标识自定义的线型
   * @type {[type]}
   */
  this.custom = null;

  this.interval = 1;

  /**
   * 用于图例遍历样式
   * @type {String}
   */
  this.stylePic = './static/LineLayer/template1/实线.png';

};

function PointParam( type ) {

  PublicProp.call( this, 'PointPanel', 'PointLayer' );

  this.color = '#576C84';
  this.crossOrigin = 'anonymous';
  // this.src = 'https://openlayers.org/en/v4.6.4/examples/data/dot.png';
  this.src = this.stylePic = './static/2.png';
  this.opacity = 1;

  this.scale = 0.1;


}

function PolygonParam( type ) {

  PublicProp.call( this, 'PolygonPanel', 'PolygonLayer' );
  this.color = '#FFFF00';
  // 仅仅使用颜色填充或者是同时使用颜色和纹理
  this.colorOnly = false;

  this.stylePic = this.color;

}

function PointParam0000( type ) {

  PublicProp.call( this, 'PointPanel', 'PointLayer' );

  /**
   * @private
   * @type {Array.<number>}
   */
  this.anchor = [0.5, 0.5];

  /**
   * @private
   * @type {Array.<number>}
   */
  this.normalizedAnchor = null;

  /**
   * @private
   * @type {ol.style.IconOrigin}
   */
  this.anchorOrigin = null;

  /**
   * @private
   * @type {ol.style.IconAnchorUnits}
   */
  this.anchorXUnits = null;

  /**
   * @private
   * @type {ol.style.IconAnchorUnits}
   */
  this.anchorYUnits = null;

  /**
   * @private
   * @type {?string}
   */
  this.crossOrigin = 'anonymous';

  this.src = 'https://openlayers.org/en/v4.6.4/examples/data/dot.png';

  // ol.asserts.assert(!(src !== undefined && image),
  //     4); // `image` and `src` cannot be provided at the same time
  // ol.asserts.assert(!image || (image && imgSize),
  //     5); // `imgSize` must be set when `image` is provided
  //
  // if ((src === undefined || src.length === 0) && image) {
  //   src = image.src || ol.getUid(image).toString();
  // }
  // ol.asserts.assert(src !== undefined && src.length > 0,
  //     6); // A defined and non-empty `src` or `image` must be provided

  /**
   * @private
   * @type {ol.Color}
   */
  this.color = 'rgba(255, 169, 0, 1)';

  /**
   * @private
   * @type {Array.<number>}
   */
  this.offset = [0, 0];

  /**
   * @private
   * @type {ol.style.IconOrigin}
   */
  this.offsetOrigin = ol.style.IconOrigin.TOP_LEFT;

  /**
   * @private
   * @type {Array.<number>}
   */
  this.origin = null;

  /**
   * @private
   * @type {ol.Size}
   */
  this.size = 10;

}

/**
 * 公共的属性
 * @param       {[type]} panel [description]
 * @param       {[type]} layer [description]
 * @constructor
 */
function PublicProp( panel, layer ) {
  // 是否可见
  this.visible = true;
  // // 数据源
  // this.url = null;
  // 对应的图层类型
  this.layer = layer;
  // 对应的面板类型
  this.panel = panel;
  // 保存样式图片的地址
  this.stylePic = null;
}



export {
  TestMap,
  PolylineParam,
  PointParam,
  PolygonParam,
}
