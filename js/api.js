/*
 *
 * the rotating play/pause object has 4 animated states
 * that can be triggered by user actions (e.g., touch/click)
 * and/or triggered by system events (e.g., socketMsg)
 * 
 * the api must support these triggers via a toggle function that tracks these 4 states
 * a reset method will be required as well, it will be used at init and whenever developer needs to clear the current state
 * 
 */
 var pp

 