
import { Avatar } from '@mui/material';

interface ProfileAvatarProps {
  size?: number;
}

const ProfileAvatar = ({ size = 80 }: ProfileAvatarProps) => {

  const profileImageUrl = "https://source.boringavatars.com/beam/120/Maria?colors=264653,2a9d8f,e9c46a,f4a261,e76f51";
  
  return (
    <Avatar
      src={profileImageUrl}
      alt="Profile"
      sx={{ 
        width: size, 
        height: size,
        border: '2px solid #f0f0f0'
      }}
    />
  );
};

export default ProfileAvatar;