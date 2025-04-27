<<<<<<< HEAD
export const timeAgo = (ms) => {
    const diff = Date.now() - ms;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    return days > 0 ? `${days} day${days > 1 ? "s" : ""} ago` :
           hours > 0 ? `${hours} hour${hours > 1 ? "s" : ""} ago` :
           minutes > 0 ? `${minutes} minute${minutes > 1 ? "s" : ""} ago` :
           `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  };

=======
export const timeAgo = (ms) => {
    const diff = Date.now() - ms;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    return days > 0 ? `${days} day${days > 1 ? "s" : ""} ago` :
           hours > 0 ? `${hours} hour${hours > 1 ? "s" : ""} ago` :
           minutes > 0 ? `${minutes} minute${minutes > 1 ? "s" : ""} ago` :
           `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  };

>>>>>>> b0e80f78adf7f515876dbd9be7827189301a9ab0
