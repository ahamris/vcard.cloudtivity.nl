(()=>{listenClick(".user-is-verified",(function(){var e=$(this).data("id"),t=route("users.email-verified",e);$.ajax({type:"get",url:t,success:function(e){Livewire.emit("refresh"),displaySuccessMessage(e.message)}})})),listenClick(".user-active",(function(){var e=$(this).data("id"),t=route("users.status",e);$.ajax({type:"get",url:t,success:function(e){Livewire.emit("refresh"),displaySuccessMessage(e.message)}})})),listenClick(".user-delete-btn",(function(e){var t=$(e.currentTarget).data("id");deleteItem(route("users.destroy",t),"User")})),listen("contextmenu",".user-impersonate",(function(e){return e.preventDefault(),!1}));var e=!1;listen("keyup keydown",(function(t){e=t.ctrlKey})),listenClick(".user-impersonate",(function(){if(e)return!1;var t=$(this).data("id"),s=document.createElement("a");s.setAttribute("href",route("impersonate",t)),document.body.appendChild(s),s.click(),document.body.removeChild(s),$(".user-impersonate").prop("disabled",!0)}))})();