<!--


---
 Being a responsible product dev
excerpt: Sometimes developing features for business alone won't be enough. Thinking
  as a user and fullfiling responsibilities towads them will pays off in the long
  run.
date: 2019-09-22 19::00 IST
updated: 2019-09-22 19:00:00 IST
categories: opinion
tags: product
---
There are a lot of ways you can be a responsible developer.
By responsibility, most devs will think of shipping on time with minimum bugs and compliant with business needs etc.

when devs get blinded with responsibility towards business needs, they `forget`/`forced to forget` their responsibility towards users.

Let me try to list down some major issues I have seen when I use different products.

## To protect the privacy of users

- Make sure not to break the app because third party analytics/chat box is not loaded.
- If possible respect the DNT flag and not to load any tracker for those users.
- Provide informed consent if any third party is recording the user session.
- Don't deny service to the user because they block some third-party trackers.
- Don't send user identifier info like email/phone etc to the third party services.
- If its a blog, providing a text-only version for users who seek privacy

## To give the better user experience

- Use proper HTML semantics, at minimum use link instead of a button so the user can open in new tab.
- Don't deny the whole service because one of the optional permission is denied by the user.
- Try to keep the `filter states`/`page no.` on URL, so when the user refreshes the page or navigates and come back, the user won't lose the context.
- Don't change URL paths without setting a redirect from the old URL to the new one.

I understand many of them are not in control of devs. But I believe they can 
convince their product managers/business analysts to implement those one at a time without hurting business.
