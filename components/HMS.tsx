"use client";
import { db } from "@/config/firebaseConfig";
import {
	Button,
	Card,
	Chip,
	Input,
	Select,
	SelectItem,
	Spacer,
	Spinner,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	Tooltip,
} from "@nextui-org/react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { ChangeEvent, useEffect, useState } from "react";

interface FormData {
	room: string;
	status: string;
	type: string;
	price: string;
	remark: string;
}

export const HMS = () => {
	const [formData, setFormData] = useState<FormData>({
		room: "",
		status: "",
		type: "",
		price: "",
		remark: "",
	});
	const [tableData, setTableData] = useState<FormData[]>([]);
	const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true); // Initially set to true

	const [searchKeyword, setSearchKeyword] = useState<string>("");

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchKeyword(e.target.value);
	};

	const filteredData = tableData.filter((item) =>
		Object.values(item).some((val) => val.toLowerCase().includes(searchKeyword.toLowerCase())),
	);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const [selectedStatus, setSelectedStatus] = useState<string>("");

	const statusOption = [
		{ key: "Available", label: "Available" },
		{ key: "Occupied", label: "Occupied" },
	];

	const getStatusEmoji = (status: string) => {
		switch (status) {
			case "Available":
				return "🟢";
			case "Occupied":
				return "🔴";
			default:
				return "";
		}
	};

	const handleSubmit = async () => {
		try {
			await addDoc(collection(db, "rooms"), { ...formData, status: selectedStatus });
			setFormData({
				room: "",
				status: "",
				type: "",
				price: "",
				remark: "",
			});
			setSelectedStatus("");
			setIsFormVisible(false);
			fetchData();
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	};

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const querySnapshot = await getDocs(collection(db, "rooms"));
			const data = querySnapshot.docs.map((doc) => doc.data() as FormData);
			setTableData(data);
		} catch (error) {
			console.error("Error fetching data: ", error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<section className="flex w-screen px-5 py-2">
			<div className="w-1/2">
				<Card className="p-5 h-[750px]">
					<div className="flex">
						<Input
							isClearable
							variant="faded"
							radius="sm"
							placeholder="Type to search"
							startContent={"🔍"}
							value={searchKeyword}
							onChange={handleSearch}
						/>
						<Spacer />
						<Button variant="faded" radius="sm" onClick={() => setIsFormVisible(true)}>
							Add new
						</Button>
						<Spacer />
						<Button isIconOnly variant="faded" radius="sm">
							i
						</Button>
					</div>
					<Spacer y={2} />
					{isLoading ? (
						<Spinner />
					) : (
						<Table selectionMode="single">
							<TableHeader>
								<TableColumn>Room #</TableColumn>
								<TableColumn>Status</TableColumn>
								<TableColumn>Type</TableColumn>
								<TableColumn>Price</TableColumn>
								<TableColumn>Action</TableColumn>
							</TableHeader>
							<TableBody emptyContent={"No data available."}>
								{filteredData.map((item, index) => (
									<TableRow key={index}>
										<TableCell className="text-left">{item.room}</TableCell>
										<TableCell className="text-left">
											<Tooltip content={item.status} radius="sm">
												<Chip color="default" variant="faded" radius="sm">
													{getStatusEmoji(item.status)}
												</Chip>
											</Tooltip>
										</TableCell>
										<TableCell className="text-left">{item.type}</TableCell>
										<TableCell className="text-left">{item.price}</TableCell>
										<TableCell className="text-left">
											<Button isIconOnly size="sm" radius="sm">
												{"=>"}
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					)}
				</Card>
			</div>
			<Spacer x={5} />
			<div className="w-1/2">
				{isFormVisible ? (
					<Card className="p-5 h-[750px]">
						<Input
							name="room"
							placeholder="Room #"
							variant="faded"
							value={formData.room}
							onChange={handleChange}
						/>
						<Select
							disableAnimation
							size="sm"
							label="Status"
							variant="faded"
							placeholder="Select an option"
							selectedKeys={new Set([selectedStatus])}
							onSelectionChange={(keys) => {
								const selected = Array.from(keys)[0] as string;
								setSelectedStatus(selected);
								setFormData((prevData) => ({ ...prevData, status: selected }));
							}}>
							{statusOption.map((status) => (
								<SelectItem key={status.key} value={status.key}>
									{status.label}
								</SelectItem>
							))}
						</Select>
						<Input
							name="type"
							placeholder="Type"
							variant="faded"
							value={formData.type}
							onChange={handleChange}
						/>
						<Input
							name="price"
							placeholder="Price"
							variant="faded"
							value={formData.price}
							onChange={handleChange}
						/>
						<Input
							name="remark"
							placeholder="Remark"
							variant="faded"
							value={formData.remark}
							onChange={handleChange}
						/>
						<Spacer />
						<Button onClick={handleSubmit}>Submit</Button>
					</Card>
				) : (
					<Card className="p-5 h-[750px]" />
				)}
			</div>
		</section>
	);
};
