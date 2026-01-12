import { useRef, useEffect } from 'react';
import { Check, X } from 'lucide-react';

interface FriendRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  userAvatar: string;
  time: string;
}

const FriendRequestModal = ({ isOpen, onClose, userName, userAvatar, time }: FriendRequestModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    // Handle confirm action here (e.g., accept friend request)
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div ref={modalRef} className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={userAvatar}
            alt={userName}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="font-semibold text-lg text-black">{userName} sent you a friend request</p>
            <p className="text-sm text-fb-dark-gray mt-1">{time}</p>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={handleConfirm}
            className="flex-1 bg-fb-blue text-white py-3 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
          >
            <Check className="w-5 h-5" />
            Confirm
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-fb-gray text-gray-700 py-3 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center gap-2"
          >
            <X className="w-5 h-5" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendRequestModal;
