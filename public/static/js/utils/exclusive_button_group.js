function toggleButtonInExclusiveGroup(target, show_associated=true) {
  if (target.classList.contains('active')) {
    target.classList.remove('active');
    if (target.getAttribute('associated_id')) {
      var node = target.parentNode.parentNode.querySelector('#'+target.getAttribute('associated_id'));
      if (!node) {
        node = target.parentNode.parentNode.parentNode.querySelector('#'+target.getAttribute('associated_id'));
      }
      node.style.display = 'none';
    }
  } else {
    target.classList.add('active');
    if (show_associated && target.getAttribute('associated_id')) {
      var node = target.parentNode.parentNode.querySelector('#'+target.getAttribute('associated_id'));
      if (!node) {
        node = target.parentNode.parentNode.parentNode.querySelector('#'+target.getAttribute('associated_id'));
      }
      node.style.display = 'block';
      //node.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    var sibling_node = target.parentNode.firstElementChild;
    do {
      //console.log('sibling_node =', sibling_node);
      //console.log('sibling_node != target: ', sibling_node != target);
      if (sibling_node != target) {
        sibling_node.classList.remove('active');
        if (sibling_node.getAttribute('associated_id')) {
          var node = sibling_node.parentNode.parentNode.querySelector('#'+sibling_node.getAttribute('associated_id'));
          if (!node) {
            node = sibling_node.parentNode.parentNode.parentNode.querySelector('#'+sibling_node.getAttribute('associated_id'));
          }
          node.style.display = 'none';
        }
      }
    } while (sibling_node = sibling_node.nextElementSibling);
  }
}

function activateButtonInExclusiveGroup(target, show_associated=true) {
  console.log('target =', target);
  console.log('target.parentNode =', target.parentNode);
  target.classList.add('active');
  if (target.getAttribute('associated_id')) {
    var node = target.parentNode.parentNode.querySelector('#'+target.getAttribute('associated_id'));
    if (!node) {
      node = target.parentNode.parentNode.parentNode.querySelector('#'+target.getAttribute('associated_id'));
    }
    node.style.display = show_associated ? 'block' : 'none';
    //node.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  var sibling_node = target.parentNode.firstElementChild;
  console.log('sibling_node =', sibling_node);
  do {
    //console.log('sibling_node != target: ', sibling_node != target);
    if (sibling_node != target) {
      sibling_node.classList.remove('active');
      if (sibling_node.getAttribute('associated_id')) {
        //console.log('sibling_node.associated_id =', sibling_node.getAttribute('associated_id'));
        var node = sibling_node.parentNode.parentNode.querySelector('#'+sibling_node.getAttribute('associated_id'));
        if (!node) {
          node = sibling_node.parentNode.parentNode.parentNode.querySelector('#'+sibling_node.getAttribute('associated_id'));
        }
        node.style.display = 'none';
      }
    }
  } while (sibling_node = sibling_node.nextElementSibling);
}

function collapseButtonInExclusiveGroup(target, show_associated=true) {
  target.classList.remove('active');
  target.classList.add('focus');
  target.style.display = 'block';
  if (target.getAttribute('associated_id')) {
    var node = target.parentNode.parentNode.querySelector('#'+target.getAttribute('associated_id'));
    if (!node) {
      node = target.parentNode.parentNode.parentNode.querySelector('#'+target.getAttribute('associated_id'));
    }
    node.style.display = 'none';
    //node.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  var sibling_node = target.parentNode.firstElementChild;
  do {
    //console.log('sibling_node != target: ', sibling_node != target);
    if (sibling_node != target) {
      sibling_node.classList.remove('active');
      sibling_node.classList.remove('focus');
      sibling_node.style.display = 'block';
      if (sibling_node.getAttribute('associated_id')) {
        //console.log('sibling_node.associated_id =', sibling_node.getAttribute('associated_id'));
        var node = sibling_node.parentNode.parentNode.querySelector('#'+sibling_node.getAttribute('associated_id'));
        if (!node) {
          node = sibling_node.parentNode.parentNode.parentNode.querySelector('#'+sibling_node.getAttribute('associated_id'));
        }
        node.style.display = 'none';
      }
    }
  } while (sibling_node = sibling_node.nextElementSibling);
}

function expandButtonInExclusiveGroup(target, show_associated=true) {
  target.classList.add('active');
  target.classList.remove('focus');
  if (target.getAttribute('associated_id')) {
    var node = target.parentNode.parentNode.querySelector('#'+target.getAttribute('associated_id'));
    if (!node) {
      node = target.parentNode.parentNode.parentNode.querySelector('#'+target.getAttribute('associated_id'));
    }
    node.style.display = show_associated ? 'block' : 'none';
    //node.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  var sibling_node = target.parentNode.firstElementChild;
  do {
    //console.log('sibling_node != target: ', sibling_node != target);
    if (sibling_node != target) {
      sibling_node.classList.remove('active');
      sibling_node.classList.remove('focus');
      sibling_node.style.display = 'none';
      if (sibling_node.getAttribute('associated_id')) {
        //console.log('sibling_node.associated_id =', sibling_node.getAttribute('associated_id'));
        var node = sibling_node.parentNode.parentNode.querySelector('#'+sibling_node.getAttribute('associated_id'));
        if (!node) {
          node = sibling_node.parentNode.parentNode.parentNode.querySelector('#'+sibling_node.getAttribute('associated_id'));
        }
        node.style.display = 'none';
      }
    }
  } while (sibling_node = sibling_node.nextElementSibling);
}


