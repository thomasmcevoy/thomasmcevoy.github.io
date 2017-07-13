import $ from '../node_modules/jquery-compat/dist/jquery.min';


export function initializeExpandables() {
  if (!window.matchMedia) return;

  if (window.matchMedia('(min-width: 750px)').matches) {
    $( '#about' ).find( '.expandable' ).removeClass( 'expandable' );
  }

  const $expandables = $( '.expandable' );

  for (let i = 0; i < $expandables.length; i++) {
    let $btn = $( '<button>SHOW MORE</button>' ),
        $exp = $expandables.eq( i );
    $exp.parent().append( $btn );
    $exp.addClass( 'is-collapsed' );
    $btn.click( toggleExpand );
  }
}

function toggleExpand( event ) {
  let $btn = $( event.target ),
      $exp = $btn.prev();

  $exp.toggleClass( 'is-expanded is-collapsed' );

  if ($btn.html() == 'SHOW MORE') $btn.html( 'SHOW LESS' );
  else $btn.html( 'SHOW MORE' );
}
