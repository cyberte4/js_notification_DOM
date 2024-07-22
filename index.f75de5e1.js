"use strict";
const pushNotification = (posTop, posRight, title, description, type)=>{
    // write code here
    const notification = document.createElement("div");
    notification.classList.add("notification", type);
    notification.style.top = `${posTop}px`;
    notification.style.right = `${posRight}px`;
    const notificationTitle = document.createElement("h2");
    notificationTitle.classList.add("title");
    notificationTitle.textContent = title;
    const notificationDescription = document.createElement("p");
    notificationDescription.classList.add("description");
    notificationDescription.textContent = description;
    notification.appendChild(notificationTitle);
    notification.appendChild(notificationDescription);
    document.body.appendChild(notification);
    setTimeout(()=>notification.style.display = "none", 2000);
};
pushNotification(10, 10, "Title of Success message", "Message example.\n Notification should contain title and description.", "success");
pushNotification(150, 10, "Title of Error message", "Message example.\n Notification should contain title and description.", "error");
pushNotification(290, 10, "Title of Warning message", "Message example.\n Notification should contain title and description.", "warning");

//# sourceMappingURL=index.f75de5e1.js.map