import { DropdownMenu as DropdownMenuPrimitive } from "@kobalte/core"
import type { ComponentProps } from "solid-js"
import { splitProps, type ParentComponent } from "solid-js"

export const DropdownMenu = DropdownMenuPrimitive.Root
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
export const DropdownMenuGroup = DropdownMenuPrimitive.Group
export const DropdownMenuSub = DropdownMenuPrimitive.Sub
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal

export const DropdownMenuContent: ParentComponent<
	DropdownMenuPrimitive.DropdownMenuContentProps
> = (props) => {
	const [local, rest] = splitProps(props, ["class"])
	return (
		<DropdownMenuPrimitive.Content
			class="z-50 min-w-8rem overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md
			origin-[var(--kb-menu-content-transform-origin)] animate-dropdown-hide data-[expanded]:animate-dropdown-show"
			classList={{
				[local.class!]: local.class !== undefined,
			}}
			{...rest}
		/>
	)
}

export const DropdownMenuItem: ParentComponent<
	DropdownMenuPrimitive.DropdownMenuItemProps
> = (props) => {
	const [local, rest] = splitProps(props, ["class"])
	return (
		<DropdownMenuPrimitive.Item
			class="relative flex cursor-default select-none items-center rounded-sm p-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:(pointer-events-none opacity-50)"
			classList={{
				[local.class!]: local.class !== undefined,
			}}
			{...rest}
		/>
	)
}

export const DropdownMenuGroupLabel: ParentComponent<
	DropdownMenuPrimitive.DropdownMenuGroupLabelProps
> = (props) => {
	const [local, rest] = splitProps(props, ["class"])
	return (
		<DropdownMenuPrimitive.GroupLabel
			class="px-2 py-1.5 text-sm font-semibold"
			classList={{
				[local.class!]: local.class !== undefined,
			}}
			{...rest}
		/>
	)
}

export const DropdownMenuItemLabel: ParentComponent<
	DropdownMenuPrimitive.DropdownMenuItemLabelProps
> = (props) => {
	const [local, rest] = splitProps(props, ["class"])
	return (
		<DropdownMenuPrimitive.ItemLabel
			class="px-2 py-1.5 text-sm font-semibold"
			classList={{
				[local.class!]: local.class !== undefined,
			}}
			{...rest}
		/>
	)
}

export const DropdownMenuSeparator: ParentComponent<
	DropdownMenuPrimitive.DropdownMenuSeparatorProps
> = (props) => {
	const [local, rest] = splitProps(props, ["class"])
	return (
		<DropdownMenuPrimitive.Separator
			class="-mx-1 my-1 h-px bg-muted"
			classList={{
				[local.class!]: local.class !== undefined,
			}}
			{...rest}
		/>
	)
}

export const DropdownMenuShortcut: ParentComponent<ComponentProps<"span">> = (
	props
) => {
	const [local, rest] = splitProps(props, ["class"])
	return (
		<span
			class="ml-auto text-xs tracking-widest opacity-60"
			classList={{
				[local.class!]: local.class !== undefined,
			}}
			{...rest}
		/>
	)
}

export const DropdownMenuSubTrigger: ParentComponent<
	DropdownMenuPrimitive.DropdownMenuSubTriggerProps
> = (props) => {
	const [local, rest] = splitProps(props, ["class", "children"])
	return (
		<DropdownMenuPrimitive.SubTrigger
			class="flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[expanded]:bg-accent"
			classList={{
				[local.class!]: local.class !== undefined,
			}}
			{...rest}
		>
			{local.children}
			<i class="i-lucide:chevron-right ml-auto" />
		</DropdownMenuPrimitive.SubTrigger>
	)
}

export const DropdownMenuSubContent: ParentComponent<
	DropdownMenuPrimitive.DropdownMenuSubContentProps
> = (props) => {
	const [local, rest] = splitProps(props, ["class"])
	return (
		<DropdownMenuPrimitive.SubContent
			class="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-dropdown-hide data-[expanded]:animate-dropdown-show origin-[var(--kb-menu-content-transform-origin)]"
			classList={{
				[local.class!]: local.class !== undefined,
			}}
			{...rest}
		/>
	)
}

export const DropdownMenuCheckboxItem: ParentComponent<
	DropdownMenuPrimitive.DropdownMenuCheckboxItemProps
> = (props) => {
	const [local, rest] = splitProps(props, ["class", "children", "checked"])
	return (
		<DropdownMenuPrimitive.CheckboxItem
			class="relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
			classList={{
				[local.class!]: local.class !== undefined,
			}}
			checked={local.checked}
			{...rest}
		>
			<DropdownMenuPrimitive.ItemIndicator class="absolute left-2 h-4 w-4 inline-flex items-center justify-center">
				<i class="i-lucide:check" />
			</DropdownMenuPrimitive.ItemIndicator>
			{props.children}
		</DropdownMenuPrimitive.CheckboxItem>
	)
}

export const DropdownMenuRadioItem: ParentComponent<
	DropdownMenuPrimitive.DropdownMenuRadioItemProps
> = (props) => {
	const [local, rest] = splitProps(props, ["class", "children"])
	return (
		<DropdownMenuPrimitive.RadioItem
			class="relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
			classList={{
				[local.class!]: local.class !== undefined,
			}}
			{...rest}
		>
			<DropdownMenuPrimitive.ItemIndicator class="absolute left-2 h-4 w-4 inline-flex items-center justify-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-2 w-2 fill-current"
				>
					<circle cx="12" cy="12" r="10" />
				</svg>
			</DropdownMenuPrimitive.ItemIndicator>
			{props.children}
		</DropdownMenuPrimitive.RadioItem>
	)
}
