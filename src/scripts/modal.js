import $ from 'jquery';

const $modal = $('<div id="modal"></div>');
const $overlay = $('<div id="overlay"></div>');
const $content = $('<div id="content"></div>');

export function initializeModal() {
  $modal.hide();
  $overlay.hide();
  $modal.append($content);
  $modal.on('click', () => hideModal());
  $overlay.on('click', () => hideModal());

  $( 'body' ).append($overlay, $modal);
}

export function showModal(content) {
  $content.empty().append(content);
  $modal.show();
  $overlay.show();
}

function hideModal() {
  $modal.hide();
  $overlay.hide();
}
