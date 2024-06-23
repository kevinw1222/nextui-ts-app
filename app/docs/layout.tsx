"use client";
import React from "react";
import { GithubIcon, GoogleIcon } from "@/components/icons";
import { AuthProvider, useAuth } from "@/config/authContext";
import { Button, Card, Spacer, Spinner } from "@nextui-org/react";

interface SigninType {
	user: null | object;
	loading: boolean;
	githubSignIn: () => void;
	googleSignIn: () => void;
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
	const { user, loading, githubSignIn, googleSignIn } = useAuth() as SigninType;

	if (loading) {
		return (
			<div className="flex items-center justify-center h-full">
				<Spinner size="lg" />
			</div>
		);
	}

	return (
		<AuthProvider>
			{user ? (
				<section className="flex flex-col items-center justify-center">
					<div className="inline-block max-w-full text-center justify-center">{children}</div>
				</section>
			) : (
				<div className="flex justify-center">
					<Card className="w-[20%] p-4">
						<p className="text-center">Please sign-in first:</p>
						<Spacer y={2} />
						<Button
							onPress={githubSignIn}
							color="default"
							variant="ghost"
							radius="sm"
							startContent={<GithubIcon />}>
							Sign-in with GitHub
						</Button>
						<Spacer />
						<Button
							onPress={googleSignIn}
							color="default"
							variant="ghost"
							radius="sm"
							startContent={<GoogleIcon />}>
							Sign-in with Google
						</Button>
					</Card>
				</div>
			)}
		</AuthProvider>
	);
}
