class A {
  run() {
    babelHelpers.classStaticPrivateMethodSet(A, A, _method, 2);
    [babelHelpers.classStaticPrivateFieldDestructureSet(A, A, _method).value] = [2];
  }

}

var _method = function _method() {};
