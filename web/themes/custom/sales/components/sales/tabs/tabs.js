import Tab from 'bootstrap/js/dist/tab';
// Check if navtabs exist.
if (document.querySelector('.nav-tabs')) {
  const navTabs = [].slice.call(document.querySelectorAll('.nav-tabs'));
  navTabs.forEach((tab) => {
    if (!tab.classList.contains('disable-tab-content')) {
      const triggerTabList = [].slice.call(tab.querySelectorAll('.nav-link'));
      triggerTabList.forEach((triggerEl) => {
        const tabTrigger = new Tab(triggerEl);
        triggerEl.addEventListener('click', (event) => {
          event.preventDefault();
          tabTrigger.show();
        });
      });
    }
  });
}
