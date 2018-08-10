select p.*, u.username as author
from posts p
join users u 
on p.user_id = u.id