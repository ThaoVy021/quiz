export default function TableUser(props) {
  const { listUsers } = props;
  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((user, index) => {
              return (
                <tr key={`table-users-${index}`}>
                  <th scope="row">{user.id}</th>
                  <th scope="row">{user.username}</th>
                  <th scope="row">{user.email}</th>
                  <th scope="row">{user.role}</th>
                  <th scope="row">
                    <button className="btn btn-secondary">View</button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => {
                        props.handleClickBtnUpdateUser();
                      }}
                    >
                      Update
                    </button>
                    <button className="btn btn-danger">Delete</button>
                  </th>
                </tr>
              );
            })}
          {listUsers && listUsers.length === 0 && (
            <tr>
              <td colSpan={4}>Not found data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
