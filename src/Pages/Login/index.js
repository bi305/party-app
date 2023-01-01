import styles from "./login.module.css";
import profile from "../../images/a.png";
import username from "../../images/username.png";
import pass from "../../images/pass.png";
import { Link } from "react-router-dom";
function LoginUi() {
	return (
		<div className={styles.main}>
			<div className={styles.sub_main}>
				<div>
					<div className={styles.imgs}>
						<div className={styles.container_image}>
							<img src={profile} alt="profile" className={styles.profile} />
						</div>
					</div>
					<div>
						<h1>Admin Login Page</h1>
						<div>
							<img src={username} alt="username" className={styles.username} />
							<input
								type="text"
								placeholder="username"
								className={styles.name}
							/>
						</div>
						<div className={styles.second_input}>
							<img src={pass} alt="pass" className={styles.username} />
							<input
								type="password"
								placeholder="password"
								className={styles.name}
							/>
						</div>
						<div className={styles.login_button}>
							<button className={styles.button}>
								<Link to={"/home"} style={{ color: "white" }}>
									Login
								</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginUi;
