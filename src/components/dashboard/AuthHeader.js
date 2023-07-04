import useAuth from "../../hooks/useAuth";

const AuthHeader = () => {
  const authCred = useAuth();
  const role = authCred.auth.role;
  return (
    <div className="header">
      <h2>LEARNER DASHBOARD</h2>
    </div>
  );
};

export default AuthHeader;
