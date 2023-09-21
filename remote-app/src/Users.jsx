import uniq from "lodash/uniq";

const users = ["Aaron", "John", "Mary", "John", "Angel", "Mary"];

const Users = () => {
  return (
    <div>
      <strong>Unique names</strong>
      <ul>
        {uniq(users).map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
