// "use client";
// import React, { useState, ChangeEvent, FormEvent } from "react";
// import { db } from "@/config/firebaseConfig";
// import { collection, getDocs, setDoc, doc } from "firebase/firestore";
// import { Button, Card, Input, Select, SelectItem, Spacer } from "@nextui-org/react";

// interface ProfileData {
// 	firstName: string;
// 	lastName: string;
// 	staffId: string;
// 	phoneNumber: string;
// 	role: string;
// }

// export const UserProfile = () => {
// 	const [profileData, setProfileData] = useState<ProfileData>({
// 		firstName: "",
// 		lastName: "",
// 		staffId: "",
// 		phoneNumber: "",
// 		role: "",
// 	});

// 	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
// 		const { name, value } = e.target;
// 		setProfileData((prevData) => ({
// 			...prevData,
// 			[name]: value,
// 		}));
// 	};

// 	const handleSelectChange = (key: string) => {
// 		setProfileData((prevData) => ({
// 			...prevData,
// 			role: key,
// 		}));
// 	};

// 	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();
// 		try {
// 			// Use staffId as the document ID
// 			await setDoc(doc(db, "profile", profileData.staffId), profileData);
// 			alert("Profile added successfully!");
// 			setProfileData({
// 				firstName: "",
// 				lastName: "",
// 				staffId: "",
// 				phoneNumber: "",
// 				role: "",
// 			});
// 		} catch (error) {
// 			console.error("Error adding profile: ", error);
// 			alert("Error adding profile. Please try again.");
// 		}
// 	};

// 	const getCollection = async () => {
// 		const querySnapshot = await getDocs(collection(db, "profile"));
// 		querySnapshot.forEach((doc) => {
// 			console.log(doc.id, " => ", doc.data());
// 		});
// 	};

// 	React.useEffect(() => {
// 		getCollection();
// 	}, []);

// 	return (
// 		<section className="flex w-screen p-5 justify-center">
// 			<Card className="p-5">
// 				<p>Create new staff</p>
// 				<form onSubmit={handleSubmit}>
// 					<Input
// 						className="w-full"
// 						size="sm"
// 						variant="faded"
// 						label="First Name"
// 						placeholder="e.g. David"
// 						labelPlacement="inside"
// 						name="firstName"
// 						value={profileData.firstName}
// 						onChange={handleChange}
// 					/>
// 					<Spacer y={2} />
// 					<Input
// 						className="w-full"
// 						size="sm"
// 						variant="faded"
// 						label="Last Name"
// 						placeholder="e.g. Johnson"
// 						labelPlacement="inside"
// 						name="lastName"
// 						value={profileData.lastName}
// 						onChange={handleChange}
// 					/>
// 					<Spacer y={2} />
// 					<Input
// 						className="w-full"
// 						size="sm"
// 						variant="faded"
// 						label="Staff ID"
// 						placeholder="e.g. AB-123456"
// 						labelPlacement="inside"
// 						name="staffId"
// 						value={profileData.staffId}
// 						onChange={handleChange}
// 					/>
// 					<Spacer y={2} />
// 					<Input
// 						className="w-full"
// 						size="sm"
// 						variant="faded"
// 						label="Phone Number"
// 						placeholder="e.g. 403-123-4567"
// 						labelPlacement="inside"
// 						name="phoneNumber"
// 						value={profileData.phoneNumber}
// 						onChange={handleChange}
// 					/>
// 					<Spacer y={2} />
// 					<Select
// 						className="w-full"
// 						size="sm"
// 						variant="faded"
// 						label="Role"
// 						placeholder="Select an option"
// 						labelPlacement="inside"
// 						name="role"
// 						defaultSelectedKeys={[profileData.role]}
// 						onSelectionChange={(keys) => handleSelectChange(Array.from(keys)[0] as string)}>
// 						<SelectItem key="admin">Admin</SelectItem>
// 						<SelectItem key="user">User</SelectItem>
// 						<SelectItem key="guest">Guest</SelectItem>
// 					</Select>
// 					<Spacer y={2} />
// 					<Button type="submit">Submit</Button>
// 				</form>
// 			</Card>
// 		</section>
// 	);
// };
