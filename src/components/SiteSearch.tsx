import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { FileText, Leaf, Package } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useContactModal } from "@/contexts/ContactModalContext";
import { searchGroups, searchItems } from "@/lib/search";

type SiteSearchProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const groupIcons = {
  Pages: FileText,
  Crops: Leaf,
  Products: Package,
} as const;

export function SiteSearch({ open, onOpenChange }: SiteSearchProps) {
  const navigate = useNavigate();
  const { openContact } = useContactModal();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(true);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onOpenChange]);

  const goTo = (to: string, id: string) => {
    onOpenChange(false);
    if (id === "page-contact") {
      openContact();
      return;
    }
    navigate({ to });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden p-0 gap-0 max-w-lg">
        <DialogTitle className="sr-only">Search GK Agro Farms</DialogTitle>
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          <CommandInput placeholder="Search crops, products, pages..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {searchGroups.map((group) => {
              const items = searchItems.filter((item) => item.group === group);
              const Icon = groupIcons[group];
              return (
                <CommandGroup key={group} heading={group}>
                  {items.map((item) => (
                    <CommandItem
                      key={item.id}
                      value={`${item.title} ${item.subtitle ?? ""} ${item.keywords}`}
                      onSelect={() => goTo(item.to, item.id)}
                      className="cursor-pointer"
                    >
                      <Icon className="text-[var(--pip-green)]" />
                      <div className="flex flex-col min-w-0">
                        <span className="font-medium truncate">{item.title}</span>
                        {item.subtitle && (
                          <span className="text-xs text-muted-foreground truncate">{item.subtitle}</span>
                        )}
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              );
            })}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
