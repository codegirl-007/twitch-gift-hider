function hideGiftButton() {
  const giftButton = document.querySelector('[data-a-target="gift-button"]');

  giftButton.style.display = 'none'
  console.log('hi')
}

const observer = new MutationObserver(() => hideGiftButton());
observer.observe(document.body, { childList: true, subtree: true });

hideGiftButton();