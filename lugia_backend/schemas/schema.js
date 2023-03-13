// Then import schema types from any plugins that might expose them
import user from './user';
import pin from './pin';
import comment from './comment';
import postedBy from './postedBy';
import save from './save';

// Then we give our schema to the builder and provide the result to Sanity
export default [
  comment, pin, postedBy, save, user
]
