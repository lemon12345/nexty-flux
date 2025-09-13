function showSnackbarMessage(html_str, alert_class="alert-info", duration=null, root=null, close_callback=null) {
  // possible values for alert_class: alert-primary, alert-secondary, alert-success, alert-danger, alert-warning, alert-info, alert-light, alert-dark.
  var snackbar = document.createElement('div');

  /*
  if ((typeof app !== 'undefined') && app.stage) { // for designer window
    app.stage.root.appendChild(snackbar);
  } else {
    document.body.appendChild(snackbar);
  }
  */
  if (root === null) {
    document.body.appendChild(snackbar);
  } else {
    root.appendChild(snackbar);
  }

  snackbar.className = `snackbar show alert ${alert_class}`;
  snackbar.style.cssText = 'padding: 0px;';

  var message = document.createElement('div');
  message.className = 'message';
  message.innerHTML = html_str;
  snackbar.appendChild(message);

  var close_button = document.createElement('button');
  close_button.className = 'btn btn-none shadow-none mx-1';
  close_button.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
  close_button.onclick = ((options) => {
    snackbar.remove();
    if (close_callback != null) {
      close_callback();
    }
  });
  snackbar.appendChild(close_button);

  if (duration != null) {
    setTimeout(function() {
      snackbar.remove();
    }, duration);
  }

  return snackbar;
}

function showCreditRechargeMessage() {
  if (app && app.guest_mode) {
    showSnackbarMessage('Run out of AI credits. Please <a href="/signup" target="_blank">register an account</a> for free to claim 100 complimentary AI credits per month.', 'alert-danger');
  } else {
    showSnackbarMessage('Run out of AI credits. <a target="_blank" style="text-decoration: underline; font-weight: 600; cursor: pointer;" onclick="closeCreditRechargeMessage(event); showCreditsModal();">Check your credits</a>.', 'alert-danger');
  }
}

function closeCreditRechargeMessage(event) {
  const snackbar = event.target.parentNode.parentNode;
  snackbar.remove();
}

