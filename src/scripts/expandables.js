import $ from 'jquery';

export function initializeExpandables() {
  if (!window.matchMedia) return;

  if (window.matchMedia('(min-width: 750px)').matches) {
    $( '#about' ).find( '.expandable' ).removeClass( 'expandable' );
  }

  const $expandables = $( '.expandable' );

  for (let i = 0; i < $expandables.length; i++) {
    const $btn = $( '<button>SHOW MORE</button>' );
    const $exp = $expandables.eq( i );

    $exp.parent().append( $btn );
    $exp.addClass( 'is-collapsed' );
    $btn.click( toggleExpand );
  }
}

function toggleExpand(event) {
  const $btn = $( event.target );
  const $exp = $btn.prev();

  $exp.toggleClass( 'is-expanded is-collapsed' );

  if ($btn.html() == 'SHOW MORE') {
    $btn.html( 'SHOW LESS' );
  } else {
    $btn.html( 'SHOW MORE' );
  }
}
