import $ from 'jquery';
import { showModal } from './modal';

const $form = $( '#form' );
const $name = $( '#name' );
const $email = $( '#email' );
const $message = $( '#message' );

export function initForm() {
  $form.on('submit', (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      name: $name.val(),
      email: $email.val(),
      message: $message.val()
    });

    $.ajax({
      type: 'POST',
      url: './scripts/send.php',
      data: data,
      success: () => {
        $form[0].reset();
        showModal('<p>YOUR MESSAGE HAS BEEN SENT!</p><p>THANK YOU</p>');
      }
    });
  });
}
