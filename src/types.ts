export type SideBarItem = {
	name: string;
	childs?: SideBarItem[];
	icon?: any;
	onItemClick: (item: SideBarItemClickProps) => void;
};

export type SideBarItemClickProps = Omit<SideBarItem, 'onItemClick'>;
