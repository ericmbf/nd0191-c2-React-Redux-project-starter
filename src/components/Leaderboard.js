import { connect } from "react-redux";

const Leaderboard = (props) => {

  const { users, orderUsersId } = props;

  return (
    <div className="leaderboard center">
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Users</th>
            <th>Answers</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {
            orderUsersId.map((id) => {
              const user = users[id];
              return (
                <tr key={id}>
                  <td>
                    <div className="row-table">
                      <img className="avatar" alt="avatar" src={user.avatarURL}></img>
                      <div className="row-user-data">
                        <span className="wpr">{user.name}</span>
                        <span className="wpr">{user.id}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    {Object.keys(user.answers).length}
                  </td>
                  <td>
                    {user.questions.length}
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

function mapStateToProps({ users }) {
  const orderUsers = Object.keys(users).sort(
    (a,b) =>  (Object.keys(users[b].answers).length + users[b].questions.length) -
      (Object.keys(users[a].answers).length + users[a].questions.length));

  return {
    users: users !== {} ? users : null,
    orderUsersId: users !== {} ? orderUsers: null
  };
}

export default connect(mapStateToProps)(Leaderboard);
