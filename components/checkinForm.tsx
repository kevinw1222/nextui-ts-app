"use client";
import React, { useEffect, useState } from "react";
import {
	Button,
	Card,
	Divider,
	Input,
	ScrollShadow,
	Select,
	SelectItem,
	Spacer,
	Table,
	TableBody,
	TableColumn,
	TableHeader,
} from "@nextui-org/react";

export const CheckInForm = () => {
	const [selectedGender, setSelectedGender] = React.useState<string>("");
	const [selectedId, setSelectedId] = React.useState<string>("");

	// Name validation
	const validateName = (name: string) => {
		const nameRestrictions = /^[\p{L}'-]+$/u;
		return name.length <= 20 && nameRestrictions.test(name);
	};
	const [firstName, setFirstName] = React.useState<string>("");
	const isFirstNameInvalid = React.useMemo(() => {
		if (firstName === "") return false;
		return validateName(firstName) ? false : true;
	}, [firstName]);
	const [lastName, setLastName] = React.useState<string>("");
	const isLastNameInvalid = React.useMemo(() => {
		if (lastName === "") return false;
		return validateName(lastName) ? false : true;
	}, [lastName]);

	// Email validation
	const validateEmail = (email: any) => email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
	const [email, setEmail] = React.useState<string>("");
	const isEmailInvalid = React.useMemo(() => {
		if (email === "") return false;
		return validateEmail(email) ? false : true;
	}, [email]);

	// Phone validation
	const [phone, setPhone] = React.useState<string>("");
	const validatePone = (phone: any) =>
		// phone.match(/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/);
		phone.match(/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/);
	const isPhoneInvalid = React.useMemo(() => {
		if (phone === "") return false;
		return validatePone(phone) ? false : true;
	}, [phone]);

	const idOption = [
		{ key: "ID", label: "National ID" },
		{ key: "DL", label: "Driver License" },
		{ key: "PP", label: "Passport" },
		{ key: "O", label: "Other" },
	];

	const genderOption = [
		{ key: "M", label: "Male" },
		{ key: "F", label: "Female" },
		{ key: "T", label: "Transsexual" },
	];

	const [numberOfResidents, setNumberOfResident] = useState<number>(1);
	const [forms, setForms] = useState<any[]>([{ id: 1 }]);

	useEffect(() => {
		const newForms = Array.from({ length: numberOfResidents }, (_, i) => ({ id: i + 1 }));
		setForms(newForms);
	}, [numberOfResidents]);

	return (
		<section className="flex w-screen px-5 py-2 justify-center">
			<div className="w-1/2">
				<Card className="p-5">
					<Input isClearable variant="faded" placeholder="Type to search" startContent={"🔍"} />
					<Spacer y={2} />
					<Table className="w-1/2">
						<TableHeader>
							<TableColumn>Room #</TableColumn>
							<TableColumn>Status</TableColumn>
							<TableColumn>Type</TableColumn>
							<TableColumn>Price</TableColumn>
							<TableColumn>Option</TableColumn>
						</TableHeader>
						<TableBody emptyContent={"No data fetched."}>
							{[]}
							{/* <TableRow>
							<TableCell></TableCell>
						</TableRow> */}
						</TableBody>
					</Table>
				</Card>
			</div>

			<Spacer x={5} />

			<div className="w-1/2 ">
				<Card className="p-5">
					<div className="flex">
						<Input
							className="w-20"
							type="number"
							size="sm"
							variant="faded"
							startContent={"👤"}
							min={1}
							defaultValue={numberOfResidents.toString()}
							onChange={(e) => setNumberOfResident(Number(e.target.value))}
						/>
					</div>

					<div className="overflow-y-auto max-h-[600px]">
						{forms.map((form, index) => (
							<div key={form.id}>
								<Spacer y={5} />
								<Divider />
								<Spacer y={5} />
								<div className="flex">
									<Input
										isRequired
										size="sm"
										className="text-left"
										label="First name"
										placeholder="e.g. Joe"
										variant="faded"
										isInvalid={isFirstNameInvalid}
										onValueChange={setFirstName}
										errorMessage={"Please enter a valid name."}
									/>
									<Spacer x={2} />
									<Input
										isRequired
										size="sm"
										className="text-left"
										label="Last name"
										placeholder="e.g. Joe"
										variant="faded"
										isInvalid={isLastNameInvalid}
										onValueChange={setLastName}
										errorMessage={"Please enter a valid name."}
									/>
									<Spacer x={2} />
									<Select
										isRequired
										disableAnimation
										size="sm"
										label="Gender"
										variant="faded"
										placeholder="Select an option"
										selectedKeys={new Set([selectedGender])}
										onSelectionChange={(keys) => setSelectedGender(Array.from(keys)[0] as string)}>
										{genderOption.map((gender) => (
											<SelectItem key={gender.key} value={gender.key}>
												{gender.label}
											</SelectItem>
										))}
									</Select>
								</div>
								<div className="flex">
									<Input
										isRequired
										size="sm"
										className="text-left"
										label="Phone number"
										placeholder="e.g. 403-123-4567"
										variant="faded"
										isInvalid={isPhoneInvalid}
										onValueChange={setPhone}
										errorMessage={"Please enter a valid phone number."}
									/>
									<Spacer x={2} />
									<Input
										size="sm"
										className="text-left"
										label="Email (optional)"
										placeholder="e.g. abc@def.com"
										variant="faded"
										isInvalid={isEmailInvalid}
										onValueChange={setEmail}
										errorMessage={"Please enter a valid email."}
									/>
								</div>
								<div className="flex">
									<Select
										isRequired
										disableAnimation
										size="sm"
										label="Document Type"
										variant="faded"
										placeholder="Select an option"
										selectedKeys={new Set([selectedId])}
										onSelectionChange={(keys) => setSelectedId(Array.from(keys)[0] as string)}>
										{idOption.map((id) => (
											<SelectItem key={id.key} value={id.key}>
												{id.label}
											</SelectItem>
										))}
									</Select>
									<Spacer x={2} />
									<Input
										isRequired
										size="sm"
										label="Document number"
										placeholder="Enter the document number"
										variant="faded"
									/>
								</div>
							</div>
						))}
					</div>
					<Spacer y={5} />

					<div className="flex justify-end">
						<Button size="sm" type="submit" color="danger" variant="flat">
							Discard
						</Button>
						<Spacer />
						<Button size="sm" type="submit" color="primary" variant="flat">
							Confirm
						</Button>
					</div>
				</Card>
			</div>
		</section>
	);
};
