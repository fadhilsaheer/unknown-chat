const toggle = (components, setCurrentMainComponent, showClose, setShowClose) => {
    setShowClose(!showClose);
    setCurrentMainComponent(showClose ? components.home : components.create);
}

export default toggle;