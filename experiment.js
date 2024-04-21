class Experiment {
  // Group Details
  static rollNos = '102103435,102103444,102283009'
  static names = 'Flappy Fiskers(Armaan Saggu, Reyyan Ahmed, Ananya Gupta)'

  canvasSel = '#board'

  run() {

    // Run the Steppers
    this.runSteppers()

    // Hide Steppers
    // this.hideSteppers()
    // canvasSetup(this.canvasSel)

    
  }

  runSteppers() {

    // Steppers
    // --------------------------------------------------
    const stepperOneRaf
	  = window.requestAnimationFrame(stepperOne)

    const stepperTwoRaf
	  = window.requestAnimationFrame(stepperTwo)

    const stepperThree = new StepperThree(
      '#valueFromStepperThree', 15
    )
    const stepperThreeFn = (ts) => {
      if (!stepperThree.isActive) stepperThree.start()
      stepperThree.step(ts)
      window.requestAnimationFrame(stepperThreeFn)
    }
    const stepperThreeRaf
	  = window.requestAnimationFrame(stepperThreeFn)
    // --------------------------------------------------
    
  }

  hideSteppers() {
    document.querySelector('#side-note')
      .classList.add('hidden')
  }
}
