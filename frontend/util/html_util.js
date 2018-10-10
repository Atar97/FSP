export function addClass(target, className) {
  target.className += ` ${className}`;
}

export function removeClass(target, className) {
  const classArray = target.className.split(' ');
  target.className = classArray.filter(name => (
    name !== className
  )).join(' ');
}

export function hasClass(target, className) {
  debugger;
  return target.className.split(' ').includes(className);
}

export function toggleClass(target, className) {
  if (hasClass(target, className)) {
    removeClass(target, className);
  } else {
    addClass(target, className);
  }
}
