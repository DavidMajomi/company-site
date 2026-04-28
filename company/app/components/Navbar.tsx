"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  Divider,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { industries, primaryNavLinks } from "../data/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  type NavItem = (typeof industries)[number] | (typeof primaryNavLinks)[number];

  const NavButton = ({ item }: { item: NavItem }) => (
    <Button
      component={Link}
      href={item.href}
      sx={{
        color: pathname === item.href ? "white" : "rgba(255,255,255,.7)",
        textTransform: "none",
      }}
    >
      {item.label}
    </Button>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "var(--color-primary)" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link href="/" style={{ color: "#fff", fontWeight: 700 }}>
            Vatheon
          </Link>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {[...industries, ...primaryNavLinks].map((item) => (
              <NavButton key={item.href} item={item} />
            ))}
          </Box>

          <IconButton
            sx={{ display: { md: "none" }, color: "#fff" }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            top: { xs: 56, sm: 64 },
            width: "100%",
            bgcolor: "#d6d8dc",
            color: "#0d1117",
          },
        }}
      >
        <Box sx={{ px: 3, py: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography sx={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em" }}>
              Vatheon
            </Typography>
            <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ my: 2, borderColor: "rgba(13,17,23,.18)" }} />

          <Typography
            sx={{
              mb: 1,
              fontSize: 14,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "rgba(13,17,23,.6)",
            }}
          >
            Industries
          </Typography>

          <List sx={{ py: 0 }}>
            {industries.map((item) => (
              <ListItemButton
                key={item.href}
                component={Link}
                href={item.href}
                selected={pathname === item.href}
                onClick={() => setOpen(false)}
                sx={{
                  borderRadius: 1,
                  px: 1,
                  "&.Mui-selected": {
                    bgcolor: "rgba(13,17,23,.08)",
                    fontWeight: 600,
                  },
                }}
              >
                {item.label}
              </ListItemButton>
            ))}
          </List>

          <Divider sx={{ my: 2, borderColor: "rgba(13,17,23,.18)" }} />

          <Typography
            sx={{
              mb: 1,
              fontSize: 14,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "rgba(13,17,23,.6)",
            }}
          >
            Company
          </Typography>

          <List
            sx={{
              py: 0,
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 0.5,
            }}
          >
            {primaryNavLinks.map((item) => (
              <ListItemButton
                key={item.href}
                component={Link}
                href={item.href}
                selected={pathname === item.href}
                onClick={() => setOpen(false)}
                sx={{
                  borderRadius: 1,
                  px: 1,
                  "&.Mui-selected": {
                    bgcolor: "rgba(13,17,23,.08)",
                    fontWeight: 600,
                  },
                }}
              >
                {item.label}
              </ListItemButton>
            ))}
          </List>

          <Divider sx={{ my: 2, borderColor: "rgba(13,17,23,.18)" }} />

          <Button
            component={Link}
            href="/contact"
            onClick={() => setOpen(false)}
            variant="contained"
            sx={{
              borderRadius: 999,
              px: 3,
              py: 1.1,
              textTransform: "none",
              fontWeight: 700,
              bgcolor: "#0d1117",
              color: "#fff",
              "&:hover": { bgcolor: "#000" },
            }}
          >
            Get In Touch
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
