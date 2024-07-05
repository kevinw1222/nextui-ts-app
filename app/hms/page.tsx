import { HMS } from "@/components/HMS";
import { title } from "@/components/primitives";

export default function HMSPage() {
	return (
		<div>
			{/* <h1 className={title()}>Blog</h1> */}
			<h1 className="pl-8 font-bold text-xl text-left">Hotel Management System</h1>
			<HMS />
		</div>
	);
}
