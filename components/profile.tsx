// import { db } from "@/config/firebaseConfig";
// import {
// 	Button,
// 	Card,
// 	Input,
// 	Spacer,
// 	Table,
// 	TableBody,
// 	TableCell,
// 	TableColumn,
// 	TableHeader,
// 	TableRow,
// 	Image,
// 	Select,
// 	SelectItem,
// } from "@nextui-org/react";
// import { doc, getDoc, getDocFromCache } from "firebase/firestore";
// import { useState } from "react";

// export default function Profile() {
// 	const [name, setName] = useState("");

// 	const fetchData = async () => {
// 		const docRef = doc(db, "", "");
// 		const docSnap = await getDoc(docRef);
// 		if (docSnap.exists()) {
// 			console.log("Document data: ", docSnap.data());
// 		} else {
// 			console.log("No such document");
// 		}
// 	};

// 	const getData = async () => {
// 		const docRef = doc(db, "", "");
// 		try {
// 			const doc = await getDocFromCache(docRef);
// 			console.log("Cached document data: ", doc.data());
// 		} catch (e) {
// 			console.error("Error getting cached document: ", e);
// 		}
// 	};

// 	const profileData = {
// 		firstName: String,
// 		lastName: String,
// 		staffId: String,
// 		phoneNumber: String,
// 		role: Array,
// 	};

// 	return (
// 		<section className="flex w-screen p-5 justify-center">
// 			{/* Left component */}
// 			<Card className="p-5 w-1/2">
// 				<div className="flex">
// 					<Input size="sm" placeholder="Type to search" variant="faded" startContent={"🔍"} />
// 					<Spacer x={2} />
// 					<Button size="sm" color="primary" variant="flat">
// 						Add new +
// 					</Button>
// 					<Spacer x={2} />
// 					<Button isIconOnly size="sm" variant="faded">
// 						i
// 					</Button>
// 				</div>
// 				<Spacer y={5} />
// 				<div className="items-center justify-start">
// 					<Table aria-label="Example static collection table">
// 						<TableHeader>
// 							<TableColumn>Room #</TableColumn>
// 							<TableColumn>Status</TableColumn>
// 							<TableColumn>Resident</TableColumn>
// 						</TableHeader>
// 						<TableBody>
// 							<TableRow key="1">
// 								<TableCell className="text-left">101</TableCell>
// 								<TableCell className="text-left">Empty</TableCell>
// 								<TableCell className="text-left">Null</TableCell>
// 							</TableRow>
// 							<TableRow key="2">
// 								<TableCell className="text-left">Zoey Lang</TableCell>
// 								<TableCell className="text-left">Technical Lead</TableCell>
// 								<TableCell className="text-left">Paused</TableCell>
// 							</TableRow>
// 						</TableBody>
// 					</Table>
// 				</div>
// 			</Card>
// 			<Spacer x={2} />

// 			{/* Right component */}
// 			<Card className="p-5 w-1/3">
// 				<div className="flex flex-col">
// 					<div className="flex flex-row">
// 						<div className="flex flex-col w-1/2">
// 							<Input
// 								className="w-full"
// 								size="sm"
// 								variant="faded"
// 								label="First Name"
// 								placeholder="e.g. David"
// 								labelPlacement="inside"
// 							/>
// 							<Spacer y={2} />
// 							<Input
// 								className="w-full"
// 								size="sm"
// 								variant="faded"
// 								label="Last Name"
// 								placeholder="e.g. Johnson"
// 								labelPlacement="inside"
// 							/>
// 							<Spacer y={2} />
// 							<Input
// 								className="w-full"
// 								size="sm"
// 								variant="faded"
// 								label="Staff ID"
// 								placeholder="e.g. AB-123456"
// 								labelPlacement="inside"
// 							/>
// 							<Spacer y={2} />
// 							<Input
// 								className="w-full"
// 								size="sm"
// 								variant="faded"
// 								label="Phone Number"
// 								placeholder="e.g. 403-123-4567"
// 								labelPlacement="inside"
// 							/>
// 							<Spacer y={2} />
// 							<Select
// 								className="w-full"
// 								size="sm"
// 								variant="faded"
// 								label="Role"
// 								placeholder="Select an option"
// 								labelPlacement="inside">
// 								<SelectItem key={""}>Officer</SelectItem>
// 							</Select>
// 							<Spacer />
// 						</div>
// 						<Spacer />
// 						<div className="flex flex-col w-1/2 items-center">
// 							<div>
// 								<Image
// 									radius="sm"
// 									width={200}
// 									src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
// 								/>
// 								<Spacer />
// 								<div className="flex justify-center">
// 									<Button size="sm">Edit</Button> <Spacer x={2} />
// 									<Button size="sm">Submit</Button>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</Card>
// 		</section>
// 	);
// }
