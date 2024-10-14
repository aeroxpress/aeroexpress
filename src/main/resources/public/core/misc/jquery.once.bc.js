/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, once) {
    var deprecatedMessageSuffix = "is deprecated in Drupal 9.3.0 and will be removed in Drupal 10.0.0. Use the core/once library instead. See https://www.drupal.org/node/3158256";
    var originalJQOnce = $.fn.once;
    var originalJQRemoveOnce = $.fn.removeOnce;
  
    $.fn.once = function jQueryOnce(id) {
      Drupal.deprecationError({
        message: "jQuery.once() ".concat(deprecatedMessageSuffix)
      });
      return originalJQOnce.apply(this, [id]);
    };
  
    $.fn.removeOnce = function jQueryRemoveOnce(id) {
      Drupal.deprecationError({
        message: "jQuery.removeOnce() ".concat(deprecatedMessageSuffix)
      });
      return originalJQRemoveOnce.apply(this, [id]);
    };
  
    var drupalOnce = once;
  
    function augmentedOnce(id, selector, context) {
      originalJQOnce.apply($(selector, context), [id]);
      return drupalOnce(id, selector, context);
    }
  
    function remove(id, selector, context) {
      originalJQRemoveOnce.apply($(selector, context), [id]);
      return drupalOnce.remove(id, selector, context);
    }
  
    window.once = Object.assign(augmentedOnce, drupalOnce, {
      remove: remove
    });
  })(jQuery, once);