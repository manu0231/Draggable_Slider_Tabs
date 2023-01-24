const tabBox = document.querySelector('.tab-box')
const icon = document.querySelectorAll('.icon i')
const allTabs = document.querySelectorAll('.tab')
const activeTab = document.querySelector('.tab .active')

const handleIcon = () => {
  let scrollValue = Math.round(tabBox.scrollLeft)
  let maxScrollableWidth = tabBox.scrollWidth - tabBox.clientWidth
  icon[0].parentElement.style.display = scrollValue > 0 ? 'flex' : 'none'
  icon[1].parentElement.style.display =
    maxScrollableWidth > scrollValue > 0 ? 'flex' : 'none'
}
let isDragging = false
allTabs.forEach((tab) => {
  tab.addEventListener('pointerdown', () => {
    tabBox.querySelector('.active').classList.remove('active')
    tab.classList.add('active')
    console.log(tab.innerHTML)
  })
})

icon.forEach((icon) => {
  icon.addEventListener('click', () => {
    tabBox.scrollLeft += icon.id === 'left' ? -350 : 350
    handleIcon()
  })
})
const dragging = (e) => {
  if (!isDragging) return
  tabBox.classList.add('dragging')
  tabBox.scrollLeft -= e.movementX
  handleIcon()
  //   console.log(e.movementX)
}
const dragstop = () => {
  if (!isDragging) return
  tabBox.classList.remove('dragging')
}

tabBox.addEventListener('pointerenter', () => (isDragging = true))
tabBox.addEventListener('pointermove', dragging)
tabBox.addEventListener('pointerleave', dragstop)
