import React from "react";
import { useAuth } from "@/config/authContext";
import { Avatar, Button, Popover, PopoverContent, PopoverTrigger, Spacer } from "@nextui-org/react";
import { GithubIcon, GoogleIcon } from "./icons";

interface User {
	displayName: string;
	email: string;
	photoURL: string;
}

interface AuthContextType {
	user: User | null;
	googleSignIn: () => void;
	githubSignIn: () => void;
	userSignOut: () => void;
}

export const UserComponent: React.FC = () => {
	const { user, googleSignIn, githubSignIn, userSignOut } = useAuth() as AuthContextType;

	return (
		<section>
			<Popover backdrop="blur">
				<PopoverTrigger>
					<Avatar
						isBordered
						radius="sm"
						size="sm"
						color={(user && "success") || "default"}
						src={user ? user.photoURL : undefined}
					/>
				</PopoverTrigger>
				<PopoverContent className="w-[300px] p-5">
					{!user ? (
						<>
							<Button
								color="default"
								radius="sm"
								variant="ghost"
								onPress={googleSignIn}
								startContent={<GoogleIcon />}>
								Sign-in with Google
							</Button>
							<Spacer />
							<Button
								color="default"
								radius="sm"
								variant="ghost"
								onPress={githubSignIn}
								startContent={<GithubIcon />}>
								Sign-in with GitHub
							</Button>
						</>
					) : (
						<>
							<p className="text-xl font-bold">Welcome, {user.displayName}</p>
							<p>Your ID: {user.email}</p>
							<Spacer y={5} />
							<Button color="danger" size="sm" radius="sm" variant="flat" onPress={userSignOut}>
								Sign-out
							</Button>
						</>
					)}
				</PopoverContent>
			</Popover>
		</section>
	);
};
