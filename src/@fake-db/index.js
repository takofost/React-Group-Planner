import mock from './mock';
import './db/mail-db';
import './db/todo-db';
import './db/contacts-db';
import './db/calendar-db';
import './db/profile-db';
import './db/project-dashboard-db';
import './db/quick-panel-db';
import './db/auth-db';
import './db/chat-db';
import './db/scrumboard-db';
import './db/notes-db';

mock.onAny().passThrough();
