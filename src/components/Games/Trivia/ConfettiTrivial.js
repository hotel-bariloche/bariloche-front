import confetti from "../../../confetti";


const Confetti = () => {

   const startConfetti = () => {
    confetti.start();
    setTimeout(() => {
    confetti.stop();
    }, 2000);
    }
    return startConfetti

}


export default Confetti