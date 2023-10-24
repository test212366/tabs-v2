const items = document.querySelectorAll('.tab-item'),
	btn = document.querySelectorAll('.btn')

function oneTab(i) {
	items.forEach(item => {
		item.classList.remove('active')
	})
	btn.forEach(btnItem => {
		btnItem.classList.remove('acbtn')
	})

	items[i].classList.add('active')
	btn[i].classList.add('acbtn')
}


document.body.addEventListener('click', e => {
	if (e.target.dataset.button == 'one') oneTab(0)
	if (e.target.dataset.button == 'two') oneTab(1)
	if (e.target.dataset.button == 'tree') oneTab(2)
})