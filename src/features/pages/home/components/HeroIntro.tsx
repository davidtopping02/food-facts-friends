import { Stack, Typography, Box } from "@mui/material";
import Reveal from "../../../../components/animation/Reveal";
import BrandLogo from "../../../../components/brand/BrandLogo";

type Props = {
  title: string;
  subText: string;
  logo: string;
};

export function HomeHeroIntro({ title, subText, logo }: Props) {
  return (
    <Stack spacing={{ xs: 4, sm: 0 }}>
      <Reveal>
        <Typography variant="h2">{title}</Typography>
      </Reveal>

      <Stack direction="row" spacing={4} alignItems="center" justifyContent="space-between">
        <Reveal>
          <Typography color="text.secondary" maxWidth={600}>
            {subText}
          </Typography>
        </Reveal>

        <Reveal direction="left">
          <Box>
            <BrandLogo src={logo} />
          </Box>
        </Reveal>
      </Stack>
    </Stack>
  );
}
