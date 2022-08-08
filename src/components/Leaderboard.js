import { connect } from "react-redux";
import { formatDate } from "../utils/helpers"

const Leaderboard = (props) => {

  const { users, questions } = props;

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
            Object.keys(users).map((id) => {
              const user = users[id];
              return (
                <tr key={id}>
                  <td>
                    <div className="row-table">
                      <img className="avatar" src={user.avatarURL}></img>
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

function mapStateToProps({ users, questions }) {
  return {
    users: users !== {} ? users : null,
  };
}

export default connect(mapStateToProps)(Leaderboard);
