// Use an object to avoid typos with 'magic strings'
// Our linters / IDE's will warn us about mistakes more readily

const events = {
  UPDATE: 'update',
  RESET: 'reset',
  ANIMATIONEND: ['animationend', 'webkitAnimationEnd', 'oanimationend', 'MSAnimationEnd']
};

export default events;